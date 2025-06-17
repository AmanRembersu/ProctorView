import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  website: string;
  instructions: string;
};

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<"Basic" | "Premium" | "Enterprise" | "">("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    website: "",
    instructions: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, selectedPlan }),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-3xl font-bold mb-4">Thank you!</h2>
        <p>We will contact you soon with your custom secure browser.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">Choose a Plan</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-12 w-full max-w-5xl">
        {(["Basic", "Premium", "Enterprise"] as const).map((plan) => (
          <div
            key={plan}
            className={`p-6 rounded-xl cursor-pointer border transition ${
              selectedPlan === plan
                ? "border-green-500 bg-zinc-900"
                : "border-white/10 bg-zinc-800"
            }`}
            onClick={() => setSelectedPlan(plan)}
          >
            <h2 className="text-2xl font-semibold mb-2">{plan}</h2>
            <p className="text-gray-400">
              {plan === "Basic" && "Basic browser for one site"}
              {plan === "Premium" && "Includes styling and basic support"}
              {plan === "Enterprise" && "Multiple site support & advanced config"}
            </p>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-zinc-900 p-6 rounded-xl space-y-4"
        >
          <h3 className="text-xl font-semibold">Tell us what you need</h3>

          <input
            required
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded bg-zinc-800 text-white"
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded bg-zinc-800 text-white"
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <input
            required
            type="url"
            placeholder="Site to render in browser"
            className="w-full p-2 rounded bg-zinc-800 text-white"
            onChange={(e) => handleChange("website", e.target.value)}
          />
          <textarea
            placeholder="Special Instructions"
            className="w-full p-2 rounded bg-zinc-800 text-white"
            rows={4}
            onChange={(e) => handleChange("instructions", e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-medium"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
