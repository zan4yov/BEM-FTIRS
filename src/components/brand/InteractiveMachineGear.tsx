import { useRef, useState, useCallback, useEffect } from 'react';
import { animate } from 'framer-motion';
import { MachineGear, type MachineGearProps } from './MachineGear';

type InteractiveMachineGearProps = MachineGearProps & {
  /** Hint for screen readers */
  ariaLabel?: string;
  /** Kecepatan putaran otomatis dalam derajat per frame */
  autoSpinSpeed?: number;
};

function pointerAngleDeg(el: HTMLElement, clientX: number, clientY: number): number {
  const r = el.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  return Math.atan2(clientY - cy, clientX - cx) * (180 / Math.PI);
}

/**
 * Draggable machine gear: putaran otomatis, seret memutar, scroll wheel, double-click putaran cepat.
 */
export function InteractiveMachineGear({
  size = 64,
  variant = 'outline',
  className,
  style,
  ariaLabel = 'Roda gigi — otomatis berputar, seret untuk memutar manual',
  autoSpinSpeed = 0.5,
}: InteractiveMachineGearProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const lastAngle = useRef(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);


  useEffect(() => {
    if (dragging || reduceMotion || autoSpinSpeed === 0) return;

    let animationFrameId: number;

    const spin = () => {
      setRotation(r => r + autoSpinSpeed);
      animationFrameId = requestAnimationFrame(spin);
    };

    animationFrameId = requestAnimationFrame(spin);

    return () => cancelAnimationFrame(animationFrameId);
  }, [dragging, reduceMotion, autoSpinSpeed]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    const el = wrapRef.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);
    draggingRef.current = true;
    setDragging(true);
    lastAngle.current = pointerAngleDeg(el, e.clientX, e.clientY);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const el = wrapRef.current;
    if (!el) return;
    const a = pointerAngleDeg(el, e.clientX, e.clientY);
    let d = a - lastAngle.current;
    if (d > 180) d -= 360;
    if (d < -180) d += 360;
    setRotation(r => r + d);
    lastAngle.current = a;
  }, []);

  const endDrag = useCallback((e: React.PointerEvent) => {
    try {
      wrapRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    draggingRef.current = false;
    setDragging(false);
  }, []);

  const onDoubleClick = useCallback(() => {
    if (reduceMotion) {
      setRotation(r => r + 90);
      return;
    }
    const start = rotation;
    animate(start, start + 360, {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: v => setRotation(v),
    });
  }, [rotation, reduceMotion]);

  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const step = reduceMotion ? 4 : 6;
      const delta = e.deltaY > 0 ? -step : step;
      setRotation(r => r + delta);
    },
    [reduceMotion],
  );

  const isAutoSpinning = !dragging && !reduceMotion && autoSpinSpeed !== 0;

  return (
    <div
      ref={wrapRef}
      role="button"
      aria-label={ariaLabel}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onLostPointerCapture={endDrag}
      onDoubleClick={onDoubleClick}
      onWheel={onWheel}
      className={`interactive-machine-gear ${className ?? ''}`.trim()}
      style={{
        display: 'inline-flex',
        cursor: dragging ? 'grabbing' : 'grab',
        touchAction: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        transform: `rotate(${rotation}deg)`,
        transition: (dragging || isAutoSpinning) ? 'none' : 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        filter: dragging ? 'drop-shadow(0 0 14px rgba(220,38,38,0.45))' : undefined,
        ...style,
      }}
      onKeyDown={e => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
          e.preventDefault();
          setRotation(r => r - 15);
        }
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
          e.preventDefault();
          setRotation(r => r + 15);
        }
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          if (reduceMotion) {
            setRotation(r => r + 90);
            return;
          }
          const start = rotation;
          animate(start, start + 360, {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: v => setRotation(v),
          });
        }
      }}
    >
      <MachineGear size={size} variant={variant} />
    </div>
  );
}