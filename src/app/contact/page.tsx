"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    source: "",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmitMailto = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Consultation request — ZionXAI");
    const body = encodeURIComponent(
      [
        `Name: ${form.firstName} ${form.lastName}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `How did you hear about us?: ${form.source}`,
        "",
        "Project brief:",
        form.message,
      ].join("\n")
    );

    window.location.href = `mailto:dan@zionxai.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-left py-20">
      {/* Header */}
      <div className="max-w-4xl">
        <h1 className="font-display text-4xl md:text-6xl tracking-tight">Let’s get to Work</h1>
        <p className="text-white/70 mt-4 text-lg md:text-xl">
          We get measurable results and stellar execution. Have a vision—or a challenge?
          Drop us a note and we’ll get back to you within 24 hours.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={onSubmitMailto} className="mt-14 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <Field
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={onChange}
            required
          />
          <Field
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={onChange}
            required
          />
          <Field
            label="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
          />
          <Field
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={onChange}
          />
          <Field
            label="Where did you hear about us?"
            name="source"
            value={form.source}
            onChange={onChange}
            placeholder="Referral, LinkedIn, Google, Event…"
          />
          <div className="md:col-span-2">
            <FieldTextArea
              label="What are you working on?"
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={6}
            />
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <button type="submit" className="btn">
            Send message <ArrowRight className="ml-2 h-4 w-4" />
          </button>

          {/* Optional: show direct email fallback */}
          <a
            href="mailto:dan@zionxai.com"
            className="btn-outline"
            aria-label="Email dan@zionxai.com"
          >
            Email dan@zionxai.com
          </a>
        </div>

        <p className="text-white/50 text-sm mt-3">
          By submitting this form, you agree to be contacted by ZionXAI regarding your inquiry.
        </p>
      </form>
    </section>
  );
}

/* ---------- Inline field components (underline style) ---------- */
function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm uppercase tracking-wide text-white/70">{label}{required && "*"}</span>
      <input
        className="mt-2 w-full bg-transparent outline-none border-b border-white/20 focus:border-brand-500
                   transition-colors pb-2 text-white placeholder:text-white/40"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

function FieldTextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  rows = 5,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="block text-sm uppercase tracking-wide text-white/70">{label}{required && "*"}</span>
      <textarea
        className="mt-2 w-full bg-transparent outline-none border-b border-white/20 focus:border-brand-500
                   transition-colors pb-2 text-white placeholder:text-white/40"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
      />
    </label>
  );
}
