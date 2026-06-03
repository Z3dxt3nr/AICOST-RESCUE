# Agent Cost Optimizer Project Selection Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task when execution begins.

**Goal:** Pick the most realistic AI monetisation project for Leon based on speed to MVP, revenue clarity, fit with Leon's current abilities, and competitive timing.

**Recommendation:** Start with a service-first product called **AI Cost Audit + Optimizer for dev teams / SMBs**. It can later grow into a SaaS dashboard and smart router.

**Architecture:** Begin as a concierge/manual audit offer supported by lightweight tooling: public landing page, intake form, pricing calculator, report generator, and outreach scripts. Convert repeated audit steps into SaaS features only after getting paid demand.

**Tech Stack:** Static/Next.js landing page, Tally/Typeform or custom form, Supabase for leads, Stripe Payment Link for paid audit, existing AI Price Intelligence Dashboard as supporting data asset.

---

## Why this is the best realistic option

### Evaluation Criteria

Scored 1-10:
- Speed to MVP, weight x3
- Revenue clarity, weight x3
- Skills match, weight x2
- Competition/market opening, weight x2

### Ranked options

1. **AI Cost Audit + Optimizer for dev teams** — 83/100
2. **Agent Rebuild Readiness Audit** — 77/100
3. **Copilot/Cursor Token Billing Tracker** — 75/100
4. **AI Model Price Intelligence Dashboard** — 73/100
5. **OpenAI Codex on AWS implementation service** — 63/100
6. **Synthetic Data Studio** — 62/100
7. **Enterprise Agent Permissions Audit** — 62/100
8. **MiniMax M3 integration templates** — 57/100
9. **24/7 Gemini Spark assistant service** — 53/100
10. **MeMo memory model product** — 52/100
11. **Hardware/DLSS/NVIDIA laptop angle** — 30/100

## Selected concept

### Working name

**AICost Rescue**

Alternative names:
- TokenTrim
- ModelSpend Audit
- AgentCost Clinic
- PromptSpend Rescue
- AI Stack Saver

### Target customer

Small-to-medium businesses, indie dev teams, agencies, and AI-heavy startups that are using tools like:
- Claude Code
- Cursor
- GitHub Copilot
- OpenAI API
- Anthropic API
- Gemini
- OpenRouter
- Vercel AI SDK
- LangChain/LangGraph agents

### Core pain

Teams adopted AI tools quickly, but now the costs are confusing or unexpectedly high. New token-based billing models and frontier-model budgets make spending hard to forecast.

### Offer

A fixed-price **AI Spend Audit** that tells a team:
- where their AI spend is going
- which models/tools are overpriced for their workload
- which workloads can move to cheaper models
- where caching, prompt compression, routing, or open-weight models can cut cost
- estimated monthly savings
- exact implementation recommendations

### Initial pricing

Start with simple service pricing:
- Free: AI Cost Self-Check calculator/report preview
- AUD $149: Solo/dev audit
- AUD $499: Team audit
- AUD $1,500+: implementation help

Later SaaS pricing:
- AUD $29/month: dashboard + alerts
- AUD $99/month: team spend reports
- AUD $299+/month: router/optimizer API

## Why this fits Leon

### Realistic for current abilities

Leon does not need to be a deep ML engineer to start. The initial product is a diagnostic/reporting business with AI-assisted technical execution. Hermes can build the software, calculators, reports, and dashboards. Leon's role is choosing the offer, speaking to early users, and selling the result.

### Fast implementation

MVP can start immediately with:
- landing page
- intake form
- public calculator
- manual report template
- outreach messages
- Stripe Payment Link

No enterprise integrations are required for the first version.

### Money path is clear

The value proposition is tied directly to savings. If a business is spending $1,000/month on AI tooling and the audit finds $300-$700/month in savings, a $149-$499 audit is easy to justify.

### Market timing

Signals from the briefing:
- Uber burned its 2026 Claude Code + Cursor budget in 4 months
- Copilot token billing is causing backlash
- Airbnb and Pinterest are moving toward cheaper/open models
- DeepSeek/MiniMax/Qwen-style deflation is making model selection matter
- Enterprises and teams are scrutinizing frontier model ROI

## What not to start with

### Do not start with hardware/DLSS/NVIDIA laptop angle

Too far from Leon's likely control. Requires hardware partnerships, gaming/dev marketing, or chip/GPU expertise.

### Do not start with MeMo as a standalone product

Technically interesting but too research-heavy and unclear for a fast-money MVP.

### Do not start with enterprise permissioning first

High-value, but too enterprise-sales heavy. Save it for later once credibility exists.

### Do not start with synthetic data studio first

Potentially good long-term, but requires industry-specific trust, compliance, and longer sales cycles.

## Phase 1 MVP: 48-hour validation build

### Task 1: Create project folder/repo

**Objective:** Keep this separate from other projects.

**Files:**
- Create: `/root/workspace/ai-monetisation-projects/agent-cost-optimizer/README.md`
- Create: `/root/workspace/ai-monetisation-projects/agent-cost-optimizer/.hermes/plans/`

**Verification:** Folder exists and plan is saved.

### Task 2: Draft landing page copy

**Objective:** Create a buyer-facing offer.

**Sections:**
- Hero: "Cut your AI tool and API bill without slowing your team down"
- Pain bullets
- Audit deliverables
- Pricing
- CTA: Request free AI cost check

**Verification:** Copy is clear enough to send to first prospects.

### Task 3: Build calculator

**Objective:** Let visitors estimate costs and savings.

**Inputs:**
- current monthly AI spend
- tools used
- API token usage if known
- team size
- primary workloads: coding, support, documents, agents, marketing

**Outputs:**
- estimated waste/risk band
- suggested audit tier
- likely savings range

**Verification:** Calculator works with preset examples.

### Task 4: Build intake form

**Objective:** Collect enough info to manually audit a lead.

**Fields:**
- name/email
- business/team type
- current tools
- monthly spend estimate
- biggest complaint
- screenshot/upload option later if needed

**Verification:** Submission arrives in email/Supabase/sheet.

### Task 5: Create report template

**Objective:** Standardize manual audits.

**Report sections:**
- executive summary
- current AI stack
- cost drivers
- quick wins
- model/tool substitutions
- caching/routing recommendations
- estimated savings
- 30-day action plan

**Verification:** One sample report can be generated from mock input.

### Task 6: Outreach scripts

**Objective:** Get first 10 conversations.

**Channels:**
- LinkedIn founders/agencies
- Reddit/Indie Hackers/builders cautiously and non-spammy
- local Australian SMB/dev groups
- direct contacts

**Verification:** 10 tailored outreach drafts ready.

## Phase 2: Paid pilot

### Goal

Get 3 paid audits before building SaaS depth.

### Success criteria

- 10+ leads submit calculator/intake
- 3+ agree to paid audit
- At least 1 customer confirms real savings or clear value

### If successful

Build dashboard features:
- account login
- uploaded invoices/API exports
- model recommendation engine
- monthly alert emails
- simple smart-router recommendations

### If not successful

Pivot the same assets into:
- Copilot/Cursor billing tracker
- Agent rebuild readiness audit
- AI model price dashboard content/SEO

## Immediate next action

Ask Leon to confirm the working name and preferred first audience:
- dev teams/agencies
- small businesses using AI tools
- Australian startups
- solo builders using Cursor/Claude/Copilot

Default recommendation: start with **dev teams/agencies using Cursor, Claude Code, Copilot, and API tools**, because they understand the pain and can pay quickly.
