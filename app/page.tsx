import SpendForm from "../components/SpendForm";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#6d28d9_100%)]"></div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO */}
        <div className="text-center mb-14">
          
          <h1 className="text-6xl font-bold text-white">
            AI Spend Audit 💸
          </h1>

          <p className="text-gray-300 mt-5 text-xl max-w-3xl mx-auto leading-relaxed">
            Analyze AI subscriptions, identify waste,
            compare plans, and uncover finance-grade
            optimization opportunities across your AI stack.
          </p>
        </div>

        {/* FORM */}
        <SpendForm />

      </div>
    </main>
  );
}