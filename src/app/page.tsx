"use client";

import { useMemo, useState } from "react";
import { ArrowRight, BadgeCheck, BarChart3, CheckCircle2, ClipboardList, DollarSign, Gauge, Mail, Rocket, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { calculateAuditEstimate } from "@/lib/audit-calculator";

const contactEmail = "kaizenworkflow@proton.me";

const tools = [
  ["cursor", "Cursor"],
  ["copilot", "GitHub Copilot"],
  ["claude-code", "Claude Code"],
  ["openai-api", "OpenAI API"],
  ["anthropic-api", "Anthropic API"],
  ["gemini", "Gemini"],
  ["openrouter", "OpenRouter"],
];

const workloads = [
  ["coding", "Coding assistants"],
  ["agents", "Agent workflows"],
  ["support", "Customer support"],
  ["documents", "Document processing"],
  ["marketing", "Marketing/content"],
];

export default function Home() {
  const [monthlySpendAud, setMonthlySpendAud] = useState(1200);
  const [teamSize, setTeamSize] = useState(6);
  const [toolsUsed, setToolsUsed] = useState<string[]>(["cursor", "claude-code", "openai-api"]);
  const [selectedWorkloads, setSelectedWorkloads] = useState<string[]>(["coding", "agents", "documents"]);
  const [hasApiUsage, setHasApiUsage] = useState(true);

  const estimate = useMemo(
    () => calculateAuditEstimate({ monthlySpendAud, teamSize, toolsUsed, workloads: selectedWorkloads, hasApiUsage }),
    [monthlySpendAud, teamSize, toolsUsed, selectedWorkloads, hasApiUsage]
  );

  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent("AICost Rescue audit request")}&body=${encodeURIComponent(
    `Hi Leon,\n\nI'd like an AICost Rescue audit.\n\nMonthly AI spend: AUD $${monthlySpendAud}\nTeam size: ${teamSize}\nTools: ${toolsUsed.join(", ")}\nWorkloads: ${selectedWorkloads.join(", ")}\nHas API usage: ${hasApiUsage ? "yes" : "no"}\nEstimated savings: AUD $${estimate.estimatedSavingsLowAud}-$${estimate.estimatedSavingsHighAud}/month\nRecommended tier: ${estimate.recommendedTier}\n\nMy main concern is:\n`
  )}`;

  function toggle(value: string, list: string[], setter: (next: string[]) => void) {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.35),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.22),_transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                <Sparkles className="h-4 w-4" />
                For dev teams and agencies using AI coding tools, APIs, and agents
              </div>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                Find and cut wasted AI spend in 48 hours.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                AICost Rescue audits Cursor, Copilot, Claude Code, OpenAI, Anthropic, Gemini, OpenRouter, and agent workflows to show where teams can reduce spend with safer model choices, caching, prompt compression, and usage rules.
              </p>
              <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-50">
                Launch offer: first 10 audits are handled manually by Leon at founding pricing, with a practical savings report instead of vague AI advice.
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#calculator" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-4 font-bold text-slate-950 shadow-lg shadow-emerald-400/20 transition hover:bg-emerald-300">
                  Run free cost check <ArrowRight className="h-5 w-5" />
                </a>
                <a href={mailto} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-4 font-semibold text-white transition hover:bg-white/10">
                  Request founding audit <Mail className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm text-slate-300">
                <Stat value="20–70%" label="potential savings" />
                <Stat value="48 hrs" label="audit turnaround" />
                <Stat value="AUD" label="Australia-first pricing" />
              </div>
            </div>

            <div id="calculator" className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-emerald-300">Free AI Cost Self-Check</p>
                  <h2 className="text-2xl font-bold">Estimate your waste band</h2>
                </div>
                <Gauge className="h-9 w-9 text-emerald-300" />
              </div>

              <div className="space-y-5">
                <Field label={`Monthly AI spend: AUD $${monthlySpendAud.toLocaleString()}`}>
                  <input className="w-full accent-emerald-400" type="range" min="0" max="10000" step="50" value={monthlySpendAud} onChange={(e) => setMonthlySpendAud(Number(e.target.value))} />
                </Field>
                <Field label={`Team size: ${teamSize}`}>
                  <input className="w-full accent-emerald-400" type="range" min="1" max="50" step="1" value={teamSize} onChange={(e) => setTeamSize(Number(e.target.value))} />
                </Field>
                <Field label="Tools used">
                  <div className="grid grid-cols-2 gap-2">
                    {tools.map(([value, label]) => (
                      <button key={value} onClick={() => toggle(value, toolsUsed, setToolsUsed)} className={`rounded-lg border px-3 py-2 text-left text-sm transition ${toolsUsed.includes(value) ? "border-emerald-300 bg-emerald-300/20 text-emerald-100" : "border-white/10 bg-slate-900/60 text-slate-300"}`}>
                        {label}
                      </button>
                    ))}
                  </div>
                </Field>
                <Field label="Main workloads">
                  <div className="grid grid-cols-2 gap-2">
                    {workloads.map(([value, label]) => (
                      <button key={value} onClick={() => toggle(value, selectedWorkloads, setSelectedWorkloads)} className={`rounded-lg border px-3 py-2 text-left text-sm transition ${selectedWorkloads.includes(value) ? "border-indigo-300 bg-indigo-300/20 text-indigo-100" : "border-white/10 bg-slate-900/60 text-slate-300"}`}>
                        {label}
                      </button>
                    ))}
                  </div>
                </Field>
                <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm text-slate-200">
                  <input type="checkbox" checked={hasApiUsage} onChange={(e) => setHasApiUsage(e.target.checked)} className="h-4 w-4 accent-emerald-400" />
                  We use API tokens / agent workflows, not just subscriptions
                </label>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-950 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Waste band</p>
                    <p className="text-3xl font-black capitalize text-emerald-300">{estimate.wasteBand}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Potential monthly savings</p>
                    <p className="text-2xl font-black">AUD ${estimate.estimatedSavingsLowAud.toLocaleString()}–${estimate.estimatedSavingsHighAud.toLocaleString()}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm text-emerald-100">
                  Recommended next step: <strong>{estimate.recommendedTier}</strong>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {estimate.priorityRecommendations.slice(0, 3).map((rec) => (
                    <li key={rec} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />{rec}</li>
                  ))}
                </ul>
                <a href={mailto} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-bold text-slate-950 transition hover:bg-slate-200">
                  Send my result and request audit <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Who it is for</p>
          <h2 className="mt-3 text-4xl font-black">Built for the teams most likely to feel AI cost creep first.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Feature icon={<BarChart3 />} title="Dev teams using AI coding tools" text="Cursor, Copilot, Claude Code, ChatGPT Team, OpenAI/Anthropic APIs, CI agents, documentation bots, code review helpers, and internal dev workflows." />
          <Feature icon={<DollarSign />} title="Agencies and consultants using AI for client work" text="Teams doing research, copy, automation, support, proposal writing, reporting, content, and delivery work where AI usage can quietly eat project margin." />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Audit deliverables</p>
            <h2 className="mt-3 text-4xl font-black">A practical report, not vague AI advice.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Current stack and cost drivers", "Quick wins in 7 days", "Model/tool substitutions", "30-day implementation plan"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <ClipboardList className="mb-4 h-6 w-6 text-emerald-300" />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Founding pricing</p>
          <h2 className="mt-3 text-4xl font-black">Start manual. Prove savings. Then productise.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-4">
          <Price name="Free Self-Check" price="AUD $0" items={["Calculator result", "Waste band estimate", "Recommended audit tier"]} cta="Run calculator" href="#calculator" />
          <Price name="Solo / Founder Audit" price="AUD $149" items={["1-person or tiny-team review", "Tool/subscription check", "Top 5 savings ideas", "7-day action plan"]} cta="Request solo audit" href={mailto} />
          <Price name="Team / Agency Audit" price="AUD $499" highlight items={["Stack/spend review", "Savings estimate", "Replacement recommendations", "30-day action plan"]} cta="Request team audit" href={mailto} />
          <Price name="Implementation Sprint" price="From AUD $1,500" items={["Hands-on tool changes", "Routing/caching setup", "Workflow cost controls", "Follow-up savings review"]} cta="Discuss sprint" href={mailto} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 text-center">
        <Rocket className="mx-auto mb-5 h-10 w-10 text-emerald-300" />
        <h2 className="text-4xl font-black">Need to know if an audit is worth it?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">Run the free self-check, then email the result. If there is no realistic saving opportunity, we will say that instead of forcing a paid audit.</p>
        <a href={mailto} className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-4 font-bold text-slate-950 hover:bg-emerald-300">
          Start with a founding audit <ArrowRight className="h-5 w-5" />
        </a>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/5 p-3"><p className="font-black text-white">{value}</p><p className="text-xs text-slate-400">{label}</p></div>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><label className="mb-2 block text-sm font-semibold text-slate-200">{label}</label>{children}</div>;
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">{icon}</div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-slate-300">{text}</p></div>;
}

function Price({ name, price, items, cta, href, highlight = false }: { name: string; price: string; items: string[]; cta: string; href: string; highlight?: boolean }) {
  return <div className={`rounded-3xl border p-6 ${highlight ? "border-emerald-300 bg-emerald-300/10" : "border-white/10 bg-white/[0.04]"}`}><div className="flex items-center justify-between"><h3 className="text-xl font-bold">{name}</h3>{highlight && <BadgeCheck className="h-6 w-6 text-emerald-300" />}</div><p className="mt-4 text-3xl font-black">{price}</p><ul className="mt-6 space-y-3 text-sm text-slate-300">{items.map((item) => <li key={item} className="flex gap-2"><Zap className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />{item}</li>)}</ul><a href={href} className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-bold ${highlight ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300" : "bg-white text-slate-950 hover:bg-slate-200"}`}>{cta}</a></div>;
}
