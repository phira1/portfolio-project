export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Sliding background layer */}
      <div
        className="absolute top-0 left-0 w-[200%] h-full opacity-10 animate-slide
                   bg-[url('/images/hero-pattern.png')] bg-repeat"
      />
    </div>
  )
}
