import React, { useState } from "react";

type Plan = "Basic" | "Pro" | "Enterprise";
type FormData = {
  name: string;
  email: string;
  website: string;
  instructions: string;
};

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | "">("");
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
        <p>We will contact you soon and also you will receive an email from our team for payment and more details to proceed with your plan.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">ProctorView Plans</h1>
      <p className="text-gray-400 mb-8 text-center max-w-2xl">
        We offer custom secure browsers tailored to your organization's needs. Choose a plan that best fits your use case.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12 w-full max-w-6xl">
        {/* Basic Plan */}
        <PlanCard
          title="Basic"
          price="$49"
          selected={selectedPlan === "Basic"}
          onClick={() => setSelectedPlan("Basic")}
          features={[
            "Single website lockdown",
            "Fullscreen kiosk mode",
            "No branding customization",
            "Basic email delivery",
          ]}
        />

        {/* Pro Plan */}
        <PlanCard
          title="Pro"
          price="$99"
          selected={selectedPlan === "Pro"}
          onClick={() => setSelectedPlan("Pro")}
          features={[
            "Branding with your logo",
            "Preload custom instructions",
            "Email + 30-day support",
            "1 free update included",
          ]}
        />

        {/* Enterprise Plan */}
        <PlanCard
          title="Enterprise"
          price="Starts at $199"
          selected={selectedPlan === "Enterprise"}
          onClick={() => setSelectedPlan("Enterprise")}
          features={[
            "Multi-domain lockdown",
            "Admin panel & logging",
            "Priority SLA & support",
            "Advanced customization",
          ]}
        />
      </div>

      {selectedPlan && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-zinc-900 p-6 rounded-xl space-y-4"
        >
          <h3 className="text-xl font-semibold mb-2">
            Tell us about your use case for the {selectedPlan} plan
          </h3>

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
            placeholder="Website to render"
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

// Pricing Card Component
function PlanCard({
  title,
  price,
  features,
  selected,
  onClick,
}: {
  title: string;
  price: string;
  features: string[];
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-xl border cursor-pointer hover:shadow-lg transition-all ${
        selected ? "border-green-500 bg-zinc-900" : "border-white/10 bg-zinc-800"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-1">{title}</h2>
      <p className="text-3xl font-bold text-green-400 mb-4">{price}</p>
      <ul className="text-gray-400 space-y-1 mb-4">
        {features.map((f, i) => (
          <li key={i}>✓ {f}</li>
        ))}
      </ul>
      <div
        className={`text-sm font-medium px-3 py-1 inline-block rounded-full ${
          selected ? "bg-green-600" : "bg-zinc-700"
        }`}
      >
        {selected ? "Selected" : "Choose Plan"}
      </div>
    </div>
  );
}
