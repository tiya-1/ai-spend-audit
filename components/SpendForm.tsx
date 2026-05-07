"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { runAudit } from "@/lib/auditEngine";

export default function SpendForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    tool: "",
    plan: "",
    spend: "",
    seats: "",
    teamSize: "",
    useCase: "",
  });

  const [loading, setLoading] =
    useState(false);

  // Load saved form
  useEffect(() => {
    const saved =
      localStorage.getItem(
        "ai-spend-form"
      );

    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  // Save form
  useEffect(() => {
    localStorage.setItem(
      "ai-spend-form",
      JSON.stringify(form)
    );
  }, [form]);

  // Handle changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  // Submit
  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      const auditResult =
        runAudit(form);

      // Save audit result
      localStorage.setItem(
        "audit-result",
        JSON.stringify(auditResult)
      );

      // Redirect to results page
      router.push("/results");

      setLoading(false);
    }, 1200);
  };

  return (
  <div className="w-full min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-3xl">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-3xl border border-purple-200 bg-white shadow-2xl"
        >

          {/* Background Pattern */}
          {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:5rem_5rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_100%_200px,#d8b4fe,transparent)]"></div>
          </div> */}

          <div className="p-8 md:p-10">

            {/* Heading */}
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold text-black">
                Enter your AI spend
              </h2>

              <p className="text-gray-600 mt-3 text-lg leading-relaxed">
                Analyze subscriptions,
                detect wasted spend,
                compare plans, and
                uncover optimization
                opportunities across
                your AI stack.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Tool */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tool
                </label>

                <select
                  name="tool"
                  value={form.tool}
                  onChange={
                    handleChange
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white/80 p-4 text-black outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-200"
                  required
                >
                  <option value="">
                    Select Tool
                  </option>

                  <option value="chatgpt">
                    ChatGPT
                  </option>

                  <option value="claude">
                    Claude
                  </option>

                  <option value="cursor">
                    Cursor
                  </option>

                  <option value="copilot">
                    GitHub Copilot
                  </option>

                  <option value="gemini">
                    Gemini
                  </option>

                  <option value="windsurf">
                    Windsurf
                  </option>

                  <option value="openai_api">
                    OpenAI API
                  </option>

                  <option value="anthropic_api">
                    Anthropic API
                  </option>
                </select>
              </div>

              {/* Plan */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Plan
                </label>

                <select
                  name="plan"
                  value={form.plan}
                  onChange={
                    handleChange
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white/80 p-4 text-black outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-200"
                  required
                >
                  <option value="">
                    Select Plan
                  </option>

                  <option value="free">
                    Free
                  </option>

                  <option value="plus">
                    Plus
                  </option>

                  <option value="pro">
                    Pro
                  </option>

                  <option value="max">
                    Max
                  </option>

                  <option value="team">
                    Team
                  </option>

                  <option value="business">
                    Business
                  </option>

                  <option value="enterprise">
                    Enterprise
                  </option>

                  <option value="individual">
                    Individual
                  </option>

                  <option value="api">
                    API Direct
                  </option>
                </select>
              </div>

              {/* Spend */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Spend ($)
                </label>

                <input
                  type="number"
                  name="spend"
                  placeholder="20"
                  value={form.spend}
                  onChange={
                    handleChange
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white/80 p-4 text-black placeholder-gray-500 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-200"
                  required
                />
              </div>

              {/* Seats */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Seats Purchased
                </label>

                <input
                  type="number"
                  name="seats"
                  placeholder="5"
                  value={form.seats}
                  onChange={
                    handleChange
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white/80 p-4 text-black placeholder-gray-500 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-200"
                  required
                />
              </div>

              {/* Team Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Active Team Size
                </label>

                <input
                  type="number"
                  name="teamSize"
                  placeholder="2"
                  value={
                    form.teamSize
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white/80 p-4 text-black placeholder-gray-500 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-200"
                  required
                />
              </div>

              {/* Use Case */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Primary Use Case
                </label>

                <select
                  name="useCase"
                  value={
                    form.useCase
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white/80 p-4 text-black outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-200"
                  required
                >
                  <option value="">
                    Select Use Case
                  </option>

                  <option value="coding">
                    Coding
                  </option>

                  <option value="writing">
                    Writing
                  </option>

                  <option value="research">
                    Research
                  </option>

                  <option value="data">
                    Data Analysis
                  </option>

                  <option value="mixed">
                    Mixed Workloads
                  </option>
                </select>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 rounded-2xl bg-purple-900 py-4 text-lg font-semibold text-white transition hover:bg-purple-500 shadow-lg shadow-purple-500/30 disabled:opacity-70"
            >
              {loading
                ? "Analyzing Spend..."
                : "Run Audit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}