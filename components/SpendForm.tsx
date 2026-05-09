
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { runAudit } from "@/lib/auditEngine";

export default function SpendForm() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    tool: "",
    currentPlan: "",
    spend: "",
    seats: "",
    teamSize: "",
    useCase: "",
  });

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "ai-spend-form"
      );

    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const updated = {
      ...form,
      [e.target.name]:
        e.target.value,
    };

    setForm(updated);

    localStorage.setItem(
      "ai-spend-form",
      JSON.stringify(updated)
    );
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const cleanedForm = {
        ...form,

        spend:
          Number(form.spend) || 0,

        seats:
          Number(form.seats) || 0,

        teamSize:
          Number(form.teamSize) || 0,
      };

      const auditResult =
        runAudit(cleanedForm);

      console.log(
        "AUDIT RESULT:",
        auditResult
      );

      localStorage.setItem(
        "audit-result",
        JSON.stringify({
          ...cleanedForm,
          ...auditResult,
        })
      );

      router.push("/results");
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl px-4">
      <form
        onSubmit={handleSubmit}
        className="rounded-[36px] border border-purple-500/20 bg-gradient-to-br from-[#12061d] to-[#1c0a2a] p-8 md:p-14"
      >
        <div className="mb-12">
          <h2 className="text-5xl font-black text-white">
            Enter your AI spend
          </h2>

          <p className="mt-5 text-xl text-gray-300">
            Analyze subscriptions and uncover savings opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* TOOL */}
          <div>
            <label className="mb-3 block text-lg text-white">
              AI Tool
            </label>

            <select
              name="tool"
              value={form.tool}
              onChange={handleChange}
              required
              className="h-16 w-full rounded-2xl bg-[#1f112c] px-5 text-white"
            >
              <option value="">
                Select Tool
              </option>

              <option>
                Cursor
              </option>

              <option>
                GitHub Copilot
              </option>

              <option>
                Claude
              </option>

              <option>
                ChatGPT
              </option>

              <option>
                Anthropic API
              </option>

              <option>
                OpenAI API
              </option>

              <option>
                Gemini
              </option>

              <option>
                Windsurf
              </option>

              <option>
                v0
              </option>
            </select>
          </div>

          {/* PLAN */}
          <div>
            <label className="mb-3 block text-lg text-white">
              Current Plan
            </label>

            <select
              name="currentPlan"
              value={form.currentPlan}
              onChange={handleChange}
              required
              className="h-16 w-full rounded-2xl bg-[#1f112c] px-5 text-white"
            >
              <option value="">
                Select Plan
              </option>

              <option>
                Free
              </option>

              <option>
                Hobby
              </option>

              <option>
                Individual
              </option>

              <option>
                Plus
              </option>

              <option>
                Pro
              </option>

              <option>
                Max
              </option>

              <option>
                Business
              </option>

              <option>
                Team
              </option>

              <option>
                Enterprise
              </option>

              <option>
                API Direct
              </option>

              <option>
                Ultra
              </option>
            </select>
          </div>

          {/* SPEND */}
          <div>
            <label className="mb-3 block text-lg text-white">
              Monthly Spend ($)
            </label>

            <input
              type="number"
              name="spend"
              value={form.spend}
              onChange={handleChange}
              required
              placeholder="50"
              className="h-16 w-full rounded-2xl bg-[#1f112c] px-5 text-white"
            />
          </div>

          {/* SEATS */}
          <div>
            <label className="mb-3 block text-lg text-white">
              Number of Seats
            </label>

            <input
              type="number"
              name="seats"
              value={form.seats}
              onChange={handleChange}
              required
              placeholder="5"
              className="h-16 w-full rounded-2xl bg-[#1f112c] px-5 text-white"
            />
          </div>

          {/* TEAM SIZE */}
          <div>
            <label className="mb-3 block text-lg text-white">
              Team Size
            </label>

            <input
              type="number"
              name="teamSize"
              value={form.teamSize}
              onChange={handleChange}
              required
              placeholder="3"
              className="h-16 w-full rounded-2xl bg-[#1f112c] px-5 text-white"
            />
          </div>

          {/* USE CASE */}
          <div>
            <label className="mb-3 block text-lg text-white">
              Primary Use Case
            </label>

            <select
              name="useCase"
              value={form.useCase}
              onChange={handleChange}
              required
              className="h-16 w-full rounded-2xl bg-[#1f112c] px-5 text-white"
            >
              <option value="">
                Select Use Case
              </option>

              <option>
                Coding
              </option>

              <option>
                Writing
              </option>

              <option>
                Research
              </option>

              <option>
                Data
              </option>

              <option>
                Mixed
              </option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-12 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-10 text-lg font-bold text-white"
        >
          {loading
            ? "Analyzing..."
            : "Run AI Audit"}
        </button>
      </form>
    </div>
  );
}

