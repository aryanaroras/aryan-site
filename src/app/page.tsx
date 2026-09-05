export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-medium tracking-wide text-amber-300 uppercase">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
        Site under construction — projects uploading
      </div>

      <p className="mb-3 font-mono text-sm tracking-[0.2em] text-cyan-400/80 uppercase sm:text-base">
        Silent in the Network. Autonomous in the Air.
      </p>

      <h1 className="font-[family-name:var(--font-crafted)] text-5xl text-slate-100 sm:text-6xl">
        Aryan Arora
      </h1>

      <p className="mt-4 max-w-md text-sm text-slate-400 sm:text-base">
        Final year engineering student, VIT Vellore
      </p>

      <a
        href="mailto:aryanarora.connect@gmail.com"
        className="mt-8 text-sm text-slate-300 underline decoration-slate-600 underline-offset-4 transition hover:text-cyan-300 hover:decoration-cyan-400"
      >
        aryanarora.connect@gmail.com
      </a>
    </div>
  );
}
