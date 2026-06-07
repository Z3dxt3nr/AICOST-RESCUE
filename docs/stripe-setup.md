# AICost Rescue — Stripe Product Setup

Use this when creating the first Stripe Payment Link.

## Recommended first paid offer

Create one product first, not all tiers.

Product name:
`AICost Rescue — Founding Team / Agency Audit`

Price:
`AUD $499 one-time`

Why this first:
- Leon chose dev teams and agencies as the first target.
- AUD $499 is high enough to validate real business demand.
- It is still easy to justify if the audit finds even AUD $300-$700/month in savings.
- It avoids looking too cheap for an agency/dev-team business problem.

## Stripe product description

Paste this into Stripe:

```text
A practical AI spend audit for dev teams and agencies using tools like Cursor, GitHub Copilot, Claude Code, OpenAI, Anthropic, Gemini, OpenRouter, and agent workflows.

Includes a review of your current AI tool/API stack, likely cost leaks, safer model/tool substitutions, quick wins, estimated monthly savings, and a 30-day implementation plan.

Delivered manually as a written report within 48 hours after you provide your spend/tool details. Founding offer for early customers.
```

## Short checkout description

If Stripe asks for a shorter description, use:

```text
48-hour AI spend audit for dev teams and agencies. Includes cost drivers, savings estimate, safer model/tool substitutions, quick wins, and a 30-day action plan.
```

## Optional lower-price second product

Only create this if you want a lower-friction option for solo founders.

Product name:
`AICost Rescue — Solo / Founder Audit`

Price:
`AUD $149 one-time`

Description:

```text
A lightweight AI cost audit for solo founders or tiny teams using AI tools such as Cursor, Claude, ChatGPT, Copilot, OpenAI API, or similar. Includes a tool/spend review, top savings opportunities, and a 7-day action plan.
```

## Optional implementation product

Do not create this as a public payment link yet. It should be quoted manually.

Product name:
`AICost Rescue — Implementation Sprint`

Price:
`From AUD $1,500`

Use this after a paid audit finds savings and the customer wants hands-on help.

## Payment Link settings

Recommended:
- Quantity: fixed at 1
- Collect customer email: yes
- Collect business name: yes, if Stripe allows custom field
- Collect phone: optional
- Confirmation page/message:

```text
Thanks — your AICost Rescue audit request has been received.

Please email kaizenworkflow@proton.me with:
1. rough monthly AI spend,
2. tools used,
3. team size,
4. main AI workloads,
5. any screenshots/exports you are comfortable sharing.

We will reply with next steps for the audit.
```

## Important

After creating the Stripe Payment Link, send me the public checkout/payment URL. It should look like one of these:
- `https://buy.stripe.com/...`
- `https://checkout.stripe.com/...`

Do not send Stripe secret keys.
