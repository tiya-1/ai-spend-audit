import SpendForm from "@/components/SpendForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* HERO */}
        <section className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            AI Cost Optimization Platform
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Stop wasting money
            <br />
            on{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              AI subscriptions
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Analyze AI tool spend, detect overpayment, compare plans,
            and uncover actionable savings opportunities across your
            engineering and productivity stack.
          </p>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-5xl font-black text-white">
                35%
              </h3>

              <p className="mt-2 text-gray-400 text-lg">
                Average savings found
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-5xl font-black text-white">
                20+
              </h3>

              <p className="mt-2 text-gray-400 text-lg">
                AI vendors supported
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-5xl font-black text-white">
                Finance
              </h3>

              <p className="mt-2 text-gray-400 text-lg">
                Grade audit reasoning
              </p>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="mt-20 flex justify-center">
          <SpendForm />
        </section>
      </div>
    </main>
  );
}