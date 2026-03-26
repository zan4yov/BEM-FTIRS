/**
 * Official FTIRS Figma file — decorative / layout reference.
 * Use with Figma MCP (`get_design_context`) or manual export (SVG/PNG) when updating visuals.
 *
 * URL `node-id=4-4071` → API / MCP node id `4:4071` (hyphens → colon).
 */
export const FTIRS_FIGMA = {
  fileKey: 'ckoxa344ag8EdLIupa8jUV',
  fileSlug: 'FTIRS',
  /** Decorative frame referenced for site ornamentation */
  decorationNodeId: '4:4071' as const,
  get decorationUrl() {
    return `https://www.figma.com/design/${this.fileKey}/${this.fileSlug}?node-id=${this.decorationNodeId.replace(':', '-')}`;
  },
} as const;
