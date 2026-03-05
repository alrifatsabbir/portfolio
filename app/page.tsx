import Experience from "@/app/components/canvas/Experience"

export default function Home() {
  return (
    <main id="root" className="relative">
      <Experience />

      <div className="scroll-container relative z-10">
        {/* Section 1: Intro */}
        <section className="flex h-screen flex-col items-center justify-center p-10">
          <h1 className="text-6xl font-bold uppercase tracking-tighter text-white">
            Al Rifat Sabbir
          </h1>
          <p className="mt-4 text-xl text-blue-400">Full Stack Web Developer</p>
        </section>

        {/* Section 2: Projects Overview */}
        <section className="flex h-screen items-center justify-end p-20">
          <div className="max-w-md rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold">WUB DOX & Projects</h2>
            <p className="mt-4 text-gray-400">
              Interactive 3D experiences meeting robust full-stack logic.
            </p>
          </div>
        </section>

        {/* Section 3: Tech Stack */}
        <section className="flex h-screen items-center justify-start p-20">
          <div className="max-w-md rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold">MERN + Next.js</h2>
            <p className="mt-4 text-gray-400">
              Optimized with Redis, Next Auth, and high-performance GSAP animations.
            </p>
          </div>
        </section>

        {/* Section 4: Contact CTA */}
        <section className="flex h-screen flex-col items-center justify-center p-10">
          <h2 className="text-5xl font-bold">Build Something Great</h2>
          <button className="mt-8 rounded-full bg-blue-600 px-8 py-3 font-semibold transition-transform hover:scale-105">
            Lets Talk
          </button>
        </section>
      </div>
    </main>
  )
}