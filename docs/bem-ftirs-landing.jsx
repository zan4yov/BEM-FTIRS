import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight, Play, ChevronRight, Zap, Users, Calendar,
  Star, Globe, BookOpen, Heart, Mic, Target
} from "lucide-react";

/* ─── BlurText animation ─── */
function BlurText({ text, className, style }) {
  const words = text.split(" ");
  const [on, setOn] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} style={{
          display: "inline-block", marginRight: "0.22em",
          opacity: on ? 1 : 0,
          filter: on ? "blur(0px)" : "blur(10px)",
          transform: on ? "translateY(0)" : "translateY(45px)",
          transition: `opacity 0.65s ease ${i * 0.1}s, filter 0.65s ease ${i * 0.1}s, transform 0.65s cubic-bezier(.22,.61,.36,1) ${i * 0.1}s`,
        }}>{w}</span>
      ))}
    </div>
  );
}

/* ─── FadeIn wrapper ─── */
function FadeIn({ children, delay = 0, style }) {
  const [on, setOn] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: on ? 1 : 0,
      transform: on ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style
    }}>{children}</div>
  );
}

/* ─── Animated gradient background orb ─── */
function Orb({ color, x, y, size, opacity = 0.12 }) {
  return (
    <div style={{
      position: "absolute", borderRadius: "50%",
      width: size, height: size,
      left: x, top: y,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      opacity, filter: "blur(40px)",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
    }} />
  );
}

const LG_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #000; }

  .lg {
    background: rgba(255,255,255,0.015);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.12);
    position: relative;
    overflow: hidden;
  }
  .lg::before {
    content: ''; position: absolute; inset: 0;
    border-radius: inherit; padding: 1.4px;
    background: linear-gradient(180deg,
      rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
      rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
      rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    pointer-events: none;
  }

  .lgs {
    background: rgba(255,255,255,0.035);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    box-shadow: 4px 4px 8px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.18);
    position: relative; overflow: hidden;
  }
  .lgs::before {
    content: ''; position: absolute; inset: 0;
    border-radius: inherit; padding: 1.4px;
    background: linear-gradient(180deg,
      rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 20%,
      rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
      rgba(255,255,255,0.2) 80%, rgba(255,255,255,0.5) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    pointer-events: none;
  }

  .lgs-red {
    background: rgba(220,38,38,0.08);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    box-shadow: 4px 4px 8px rgba(0,0,0,0.1), inset 0 1px 1px rgba(220,38,38,0.2);
    position: relative; overflow: hidden;
  }
  .lgs-red::before {
    content: ''; position: absolute; inset: 0;
    border-radius: inherit; padding: 1.4px;
    background: linear-gradient(180deg,
      rgba(220,38,38,0.5) 0%, rgba(220,38,38,0.2) 20%,
      rgba(220,38,38,0) 40%, rgba(220,38,38,0) 60%,
      rgba(220,38,38,0.2) 80%, rgba(220,38,38,0.5) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    pointer-events: none;
  }

  .heading { font-family: 'Instrument Serif', serif; font-style: italic; }
  .body-font { font-family: 'Barlow', sans-serif; }

  @keyframes pulse-glow {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.22; }
  }
  @keyframes slow-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes grain {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-2%, -3%); }
    30% { transform: translate(3%, -1%); }
    50% { transform: translate(-1%, 2%); }
    70% { transform: translate(2%, 3%); }
    90% { transform: translate(-3%, 1%); }
  }

  .btn-white {
    background: #fff; color: #000; border: none; cursor: pointer;
    font-family: 'Barlow', sans-serif; font-weight: 600;
    transition: opacity 0.2s;
  }
  .btn-white:hover { opacity: 0.88; }

  .btn-ghost {
    background: transparent; border: none; cursor: pointer;
    font-family: 'Barlow', sans-serif;
    color: rgba(255,255,255,0.55);
    transition: color 0.2s;
  }
  .btn-ghost:hover { color: rgba(255,255,255,0.85); }

  .card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.15);
  }

  .nav-link {
    font-family: 'Barlow', sans-serif; font-weight: 500; font-size: 13px;
    color: rgba(255,255,255,0.75); text-decoration: none;
    transition: color 0.2s;
  }
  .nav-link:hover { color: #fff; }

  @media (max-width: 768px) {
    .hide-mobile { display: none !important; }
    .mobile-col { flex-direction: column !important; }
    .mobile-text-sm { font-size: 14px !important; }
  }
  @media (max-width: 640px) {
    .chess-row { flex-direction: column !important; }
    .chess-row-rev { flex-direction: column !important; }
  }
`;

const BADGE_STYLE = {
  display: "inline-block",
  borderRadius: 9999,
  padding: "5px 14px",
  marginBottom: 20,
  fontSize: 12,
  fontWeight: 500,
  color: "rgba(255,255,255,0.7)",
  fontFamily: "'Barlow', sans-serif",
};

const SECTION_H2 = {
  fontFamily: "'Instrument Serif', serif",
  fontStyle: "italic",
  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
  color: "#fff",
  lineHeight: 0.92,
  letterSpacing: "-0.5px",
};

const BODY_TEXT = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  color: "rgba(255,255,255,0.5)",
  lineHeight: 1.75,
};

export default function BEMFTIRSLanding() {
  return (
    <div className="body-font" style={{ background: "#000", color: "#fff", overflowX: "hidden", minHeight: "100vh" }}>
      <style>{LG_CSS}</style>

      {/* ══ NAVBAR ══════════════════════════════════════════════════ */}
      <header style={{ position: "fixed", top: 16, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "center", padding: "0 20px" }}>
        <div className="lg" style={{ borderRadius: 9999, padding: "8px 8px 8px 16px", display: "flex", alignItems: "center", gap: 8, maxWidth: 820, width: "100%", justifyContent: "space-between" }}>
          {/* Logo mark */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
              background: "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, fontWeight: 700, color: "#fff", letterSpacing: 0.5,
              boxShadow: "0 0 12px rgba(220,38,38,0.4)"
            }}>BEM</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", lineHeight: 1.2 }}>FTIRS ITS</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontWeight: 300, lineHeight: 1 }}>Indsys · Surabaya</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="hide-mobile" style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {["Beranda", "Tentang", "Divisi", "Kabinet", "Event", "Berita"].map(l => (
              <a key={l} href="#" className="nav-link">{l}</a>
            ))}
          </nav>

          {/* CTA */}
          <button className="btn-white" style={{ borderRadius: 9999, padding: "9px 18px", fontSize: 13, display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
            Gabung <ArrowUpRight size={14} />
          </button>
        </div>
      </header>

      {/* ══ HERO ════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {/* Atmosphere */}
        <Orb color="rgba(220,38,38,0.7)" x="50%" y="0%" size="900px" opacity={0.12} />
        <Orb color="rgba(180,20,20,0.8)" x="20%" y="60%" size="500px" opacity={0.06} />
        <Orb color="rgba(100,10,10,0.9)" x="85%" y="40%" size="400px" opacity={0.07} />

        {/* Subtle grid */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.025, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px"
        }} />

        {/* Pulsing ring */}
        <div style={{
          position: "absolute", width: 600, height: 600, borderRadius: "50%",
          border: "1px solid rgba(220,38,38,0.1)",
          top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          animation: "pulse-glow 4s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: 900, height: 900, borderRadius: "50%",
          border: "1px solid rgba(220,38,38,0.05)",
          top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          animation: "pulse-glow 4s ease-in-out infinite 1s",
          pointerEvents: "none",
        }} />

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 320, background: "linear-gradient(to bottom, transparent, #000)", zIndex: 2 }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "120px 24px 80px", maxWidth: 900, margin: "0 auto" }}>
          {/* Badge */}
          <FadeIn delay={0}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
              <div className="lg" style={{ borderRadius: 9999, padding: "6px 6px 6px 16px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>Kabinet BEM FTIRS ITS 2025</span>
                <span style={{
                  background: "linear-gradient(135deg, #dc2626, #7f1d1d)",
                  color: "#fff", borderRadius: 9999, padding: "4px 10px",
                  fontSize: 11, fontWeight: 700, boxShadow: "0 0 8px rgba(220,38,38,0.5)"
                }}>Aktif</span>
              </div>
            </div>
          </FadeIn>

          {/* Main heading */}
          <BlurText
            text="Bergerak Bersama, Membangun Indsys"
            className="heading"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)", color: "#fff", lineHeight: 0.88, letterSpacing: "-3px", marginBottom: 28, display: "block" }}
          />

          {/* Sub */}
          <FadeIn delay={0.8}>
            <p style={{ ...BODY_TEXT, fontSize: 16, maxWidth: 520, margin: "0 auto 44px", lineHeight: 1.65 }}>
              Badan Eksekutif Mahasiswa Fakultas Teknologi Industri dan Rekayasa Sistem — Institut Teknologi Sepuluh Nopember, Surabaya.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={1.1}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="lgs" style={{ borderRadius: 9999, padding: "13px 26px", fontSize: 14, fontWeight: 500, color: "#fff", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, transition: "opacity .2s" }}>
                Jelajahi BEM <ArrowUpRight size={15} />
              </button>
              <button className="btn-ghost" style={{ borderRadius: 9999, padding: "13px 24px", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Play size={13} style={{ fill: "rgba(255,255,255,0.5)" }} /> Profil Video
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ DEPARTMENTS BAR ════════════════════════════════════════ */}
      <section style={{ padding: "32px 24px 72px", background: "#000", textAlign: "center" }}>
        <FadeIn>
          <div className="lg" style={{ ...BADGE_STYLE, marginBottom: 28 }}>
            6 Departemen di bawah FTIRS ITS
          </div>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px 36px", maxWidth: 900, margin: "0 auto" }}>
            {[
              "Teknik Mesin", "Teknik Kimia", "Teknik Fisika",
              "T. Sistem & Industri", "T. Material & Metalurgi", "Teknik Pangan"
            ].map(d => (
              <span key={d} className="heading" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)", color: "rgba(255,255,255,0.72)", letterSpacing: "-0.3px" }}>{d}</span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ══ MISSION / "HOW IT WORKS" ═══════════════════════════════ */}
      <section style={{ position: "relative", padding: "100px 24px", overflow: "hidden", background: "#000" }}>
        <Orb color="rgba(200,20,20,0.6)" x="60%" y="50%" size="700px" opacity={0.1} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 220, background: "linear-gradient(to bottom, #000, transparent)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 220, background: "linear-gradient(to top, #000, transparent)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div className="lg" style={BADGE_STYLE}>Tentang BEM FTIRS</div>
            <h2 className="heading" style={{ ...SECTION_H2, fontSize: "clamp(2.2rem, 5.5vw, 4rem)", marginBottom: 24 }}>
              Suara mahasiswa, digerakkan dengan nyata.
            </h2>
            <p style={{ ...BODY_TEXT, fontSize: 15, marginBottom: 36, lineHeight: 1.75 }}>
              BEM FTIRS adalah jembatan antara mahasiswa dan institusi. Kami mengawal kebijakan, menyelenggarakan program bermakna, dan membangun ekosistem akademik yang tangguh bagi lebih dari 6.000 mahasiswa di Fakultas Merah ITS.
            </p>
            <button className="lgs-red" style={{ borderRadius: 9999, padding: "13px 28px", fontSize: 14, fontWeight: 500, color: "#fff", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Kenali BEM FTIRS <ArrowUpRight size={15} />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ══ FEATURES CHESS ════════════════════════════════════════ */}
      <section style={{ padding: "80px 24px 100px", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div className="lg" style={BADGE_STYLE}>Program Unggulan</div>
              <h2 className="heading" style={SECTION_H2}>Dari gagasan hingga aksi nyata.</h2>
            </div>
          </FadeIn>

          {/* Row 1 */}
          <FadeIn>
            <div className="chess-row" style={{ display: "flex", gap: 64, alignItems: "center", marginBottom: 88, flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 300px", minWidth: 260 }}>
                <h3 className="heading" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", color: "#fff", marginBottom: 18, lineHeight: 0.95 }}>
                  Wadah aspirasi & advokasi mahasiswa.
                </h3>
                <p style={{ ...BODY_TEXT, marginBottom: 28 }}>
                  BEM FTIRS aktif mengawal setiap kebijakan yang menyentuh kehidupan mahasiswa — dari kurikulum, fasilitas, hingga kesejahteraan. Setiap suara mahasiswa Indsys diperjuangkan di sini.
                </p>
                <button className="lgs" style={{ borderRadius: 9999, padding: "10px 20px", fontSize: 13, fontWeight: 500, color: "#fff", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Pelajari <ChevronRight size={13} />
                </button>
              </div>
              <div style={{ flex: "1 1 300px", minWidth: 260 }}>
                <div className="lg card-hover" style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", background: "linear-gradient(135deg, rgba(100,10,10,0.4) 0%, rgba(30,30,60,0.3) 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, rgba(220,38,38,0.3), rgba(100,10,10,0.5))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <BookOpen size={28} color="rgba(255,255,255,0.6)" />
                  </div>
                  <span className="heading" style={{ fontSize: 18, color: "rgba(255,255,255,0.4)" }}>Advokasi & Kebijakan</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Row 2 */}
          <FadeIn>
            <div className="chess-row-rev" style={{ display: "flex", gap: 64, alignItems: "center", flexWrap: "wrap", flexDirection: "row-reverse" }}>
              <div style={{ flex: "1 1 300px", minWidth: 260 }}>
                <h3 className="heading" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", color: "#fff", marginBottom: 18, lineHeight: 0.95 }}>
                  Pengembangan diri yang holistik.
                </h3>
                <p style={{ ...BODY_TEXT, marginBottom: 28 }}>
                  Dari pelatihan kepemimpinan, kompetisi nasional, hingga kegiatan sosial — BEM FTIRS merancang program yang mempersiapkan mahasiswa Indsys menjadi pemimpin masa depan industri Indonesia.
                </p>
                <button className="lgs" style={{ borderRadius: 9999, padding: "10px 20px", fontSize: 13, fontWeight: 500, color: "#fff", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Lihat program <ChevronRight size={13} />
                </button>
              </div>
              <div style={{ flex: "1 1 300px", minWidth: 260 }}>
                <div className="lg card-hover" style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", background: "linear-gradient(135deg, rgba(20,40,80,0.35) 0%, rgba(60,10,10,0.35) 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, rgba(40,60,180,0.25), rgba(220,38,38,0.2))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Target size={28} color="rgba(255,255,255,0.6)" />
                  </div>
                  <span className="heading" style={{ fontSize: 18, color: "rgba(255,255,255,0.4)" }}>Pengembangan Mahasiswa</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ 4-CARD PILLARS ════════════════════════════════════════ */}
      <section style={{ padding: "60px 24px 100px", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div className="lg" style={BADGE_STYLE}>Pilar BEM FTIRS</div>
              <h2 className="heading" style={SECTION_H2}>Empat pilar gerakan kami.</h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
            {[
              { icon: <Zap size={18} color="rgba(255,255,255,0.75)" />, title: "Advokasi", desc: "Memperjuangkan hak dan kepentingan mahasiswa FTIRS di setiap tingkatan kebijakan institusi." },
              { icon: <Users size={18} color="rgba(255,255,255,0.75)" />, title: "Kolaborasi", desc: "Membangun sinergi antar departemen, himpunan, dan organisasi untuk dampak yang lebih besar." },
              { icon: <Star size={18} color="rgba(255,255,255,0.75)" />, title: "Inovasi", desc: "Mendorong kreativitas dan solusi segar dalam setiap program dan inisiatif mahasiswa." },
              { icon: <Heart size={18} color="rgba(255,255,255,0.75)" />, title: "Pemberdayaan", desc: "Mengembangkan seluruh potensi mahasiswa Indsys melalui program inklusif dan berdampak nyata." },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.1}>
                <div className="lg card-hover" style={{ borderRadius: 18, padding: "24px", height: "100%" }}>
                  <div className="lgs" style={{ width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    {c.icon}
                  </div>
                  <h4 className="heading" style={{ fontSize: 19, color: "#fff", marginBottom: 10 }}>{c.title}</h4>
                  <p style={{ ...BODY_TEXT, fontSize: 13, lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ════════════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "80px 24px", background: "#000", overflow: "hidden" }}>
        <Orb color="rgba(200,20,20,0.7)" x="50%" y="50%" size="800px" opacity={0.09} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 200, background: "linear-gradient(to bottom, #000, transparent)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 200, background: "linear-gradient(to top, #000, transparent)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div className="lg" style={{ borderRadius: 24, padding: "48px 32px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 32, textAlign: "center" }}>
                {[
                  { v: "6.000+", l: "Mahasiswa FTIRS" },
                  { v: "10", l: "Divisi Aktif" },
                  { v: "50+", l: "Event Per Tahun" },
                  { v: "6", l: "Departemen" },
                ].map(s => (
                  <div key={s.l}>
                    <div className="heading" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#fff", lineHeight: 1, marginBottom: 8 }}>{s.v}</div>
                    <div style={{ ...BODY_TEXT, fontSize: 13 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ DIVISIONS GRID ══════════════════════════════════════ */}
      <section style={{ padding: "80px 24px 100px", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div className="lg" style={BADGE_STYLE}>Struktur Organisasi</div>
              <h2 className="heading" style={SECTION_H2}>10 divisi yang bergerak bersama.</h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 14 }}>
            {[
              { name: "Kesekretariatan", desc: "Mengelola administrasi, dokumentasi, dan koordinasi organisasi.", icon: "📋" },
              { name: "Keuangan", desc: "Mengatur anggaran, keuangan, dan laporan keuangan BEM.", icon: "💰" },
              { name: "Hubungan Luar", desc: "Membangun jejaring dan kemitraan strategis lintas institusi.", icon: "🌐" },
              { name: "Kajian Strategis", desc: "Menganalisis dan mengawal isu-isu kritis yang berdampak bagi mahasiswa.", icon: "🔍" },
              { name: "PSDM", desc: "Pengembangan sumber daya dan kompetensi seluruh anggota BEM.", icon: "🎯" },
              { name: "Kewirausahaan", desc: "Mendorong jiwa entrepreneurship dan kemandirian ekonomi mahasiswa.", icon: "💼" },
              { name: "Sosmas", desc: "Menggerakkan aksi sosial dan pengabdian kepada masyarakat.", icon: "🤲" },
              { name: "Media & Komunikasi", desc: "Mengelola komunikasi, konten, dan branding digital BEM FTIRS.", icon: "📱" },
              { name: "Olahraga & Seni", desc: "Memfasilitasi kegiatan olahraga, seni, dan budaya mahasiswa.", icon: "🎨" },
              { name: "Minat & Bakat", desc: "Mengembangkan potensi non-akademis dan minat khusus mahasiswa.", icon: "⭐" },
            ].map((d, i) => (
              <FadeIn key={d.name} delay={i * 0.05}>
                <div className="lg card-hover" style={{ borderRadius: 16, padding: "20px 22px", display: "flex", gap: 16, alignItems: "flex-start", height: "100%" }}>
                  <span style={{ fontSize: 26, flexShrink: 0, lineHeight: 1 }}>{d.icon}</span>
                  <div>
                    <h4 className="heading" style={{ fontSize: 16, color: "#fff", marginBottom: 5, lineHeight: 1.1 }}>{d.name}</h4>
                    <p style={{ ...BODY_TEXT, fontSize: 12, lineHeight: 1.55 }}>{d.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS / CABINET ══════════════════════════════ */}
      <section style={{ padding: "60px 24px 100px", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div className="lg" style={BADGE_STYLE}>Suara Mahasiswa</div>
              <h2 className="heading" style={SECTION_H2}>Mereka yang merasakannya.</h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
            {[
              { quote: "BEM FTIRS benar-benar menjadi rumah bagi kami. Program advokasi mereka nyata dan berdampak langsung bagi kehidupan mahasiswa di Indsys.", name: "Arya Pratama", role: "Mahasiswa Teknik Mesin ITS" },
              { quote: "Bergabung di BEM FTIRS memberi saya kesempatan tumbuh jauh di luar ruang kelas — kepemimpinan, networking, dan dampak sosial yang sesungguhnya.", name: "Sari Kusumawati", role: "Mahasiswi Teknik Kimia ITS" },
              { quote: "Salah satu keputusan terbaik semasa kuliah. BEM FTIRS bukan sekadar organisasi, tapi ekosistem pengembangan diri yang luar biasa.", name: "Reza Firmansyah", role: "Mahasiswa T. Sistem & Industri ITS" },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.12}>
                <div className="lg card-hover" style={{ borderRadius: 20, padding: "28px 26px", height: "100%" }}>
                  <p style={{ ...BODY_TEXT, fontStyle: "italic", lineHeight: 1.7, marginBottom: 24, fontSize: 13 }}>"{t.quote}"</p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
                    <div style={{ fontWeight: 500, fontSize: 13, color: "#fff", marginBottom: 3 }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>{t.role}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ████████████████████████████████████████████████ */}
      <section style={{ position: "relative", padding: "120px 24px 100px", background: "#000", overflow: "hidden", textAlign: "center" }}>
        <Orb color="rgba(220,38,38,0.8)" x="50%" y="0%" size="900px" opacity={0.12} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 200, background: "linear-gradient(to bottom, #000, transparent)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto" }}>
          <FadeIn>
            <BlurText
              text="Bersama kita wujudkan Indsys yang lebih baik."
              className="heading"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)", color: "#fff", lineHeight: 0.88, letterSpacing: "-2px", marginBottom: 24, display: "block" }}
            />
            <p style={{ ...BODY_TEXT, fontSize: 15, marginBottom: 44, lineHeight: 1.65 }}>
              Sampaikan aspirasimu, ikuti program kami, dan jadilah bagian dari gerakan BEM FTIRS ITS.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="lgs-red" style={{ borderRadius: 9999, padding: "14px 30px", fontSize: 14, fontWeight: 500, color: "#fff", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Hubungi BEM <ArrowUpRight size={16} />
              </button>
              <button className="btn-white" style={{ borderRadius: 9999, padding: "14px 30px", fontSize: 14 }}>
                Lihat Semua Event
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Footer bar */}
        <div style={{ maxWidth: 1100, margin: "100px auto 0", paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #dc2626, #7f1d1d)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700, color: "#fff" }}>BEM</div>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© 2025 BEM FTIRS ITS · Fakultas Merah</span>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {["Instagram", "LinkedIn", "Tentang", "Kontak"].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.7)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}
              >{l}</a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
