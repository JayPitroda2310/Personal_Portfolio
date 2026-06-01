/** Layered HUD backdrop: animated blueprint grid, glow, scanlines, vignette. */
export default function HudBackground() {
  return (
    <>
      <div className="bg-layer bg-grid" aria-hidden="true" />
      <div className="bg-layer bg-glow" aria-hidden="true" />
      <div className="bg-layer bg-scanlines" aria-hidden="true" />
      <div className="bg-layer bg-vignette" aria-hidden="true" />
    </>
  )
}
