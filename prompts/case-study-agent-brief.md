# Public-Safe Case Study Agent Brief

Use this prompt in a new chat or with another coding agent when adding a portfolio case study to this repository.

## Copy-ready prompt

```text
I am adding a new public portfolio case study to this Astro repository.

I will provide a PDF or pasted copy containing the private/source version of the case study. Treat that material as confidential source material. Do not commit the PDF, its extracted copy, original screenshots, source diagrams, Figma exports, filenames, internal references, or any other private asset to the portfolio repository.

Use this guide as a content and presentation reference:
https://thecrit.co/resources/complete-portfolio-guide
Apply its principles in your own words. The portfolio is selected evidence for the kind of role or work I want next, not an archive of everything I have made. Make the project useful at two depths: a fast reader should understand the argument quickly, while an interested reader should be able to inspect the evidence and reasoning.

Read `docs/portfolio-publishing-protocol.md` before editing. Follow it exactly.

Create two versions:

1. Private master draft
   - Create or update a private master draft outside this repository at:
     `/Users/haleygruensfelder/portfolio-private/<public-slug>.master.md`
   - Preserve the original detail needed for accuracy.
   - Begin the file with a CONFIDENTIAL handling notice.
   - Do not add any private-source file to this Git repository.

2. Public-safe portfolio page
   - Create or update `src/pages/projects/<public-slug>.astro`.
   - Follow the visual and content structure used by:
     `src/pages/projects/go-to-market-deal-making-process-overhaul.astro`
   - Write for recruiters: make my role, methods, reasoning, and outcome clear.
   - Generalize company, customer, product, team, vendor, and internal process names.
   - Generalize exact financials, dates, strategic priorities, metrics, tool architecture, and non-public operational information.
   - Synthesize quotes into findings; do not publish direct private quotes.
   - Do not claim direct causation unless the source establishes it.

Case-study standards:

- Start from the target role or kind of work. Make the project prove a relevant capability such as research, systems thinking, facilitation, product judgment, or cross-functional collaboration rather than merely documenting activity.
- Make the opening self-contained: state the problem, audience, my role, the outcome or current state, and show one representative visual.
- Explain the constraints that shaped the work, including team, timeline, platform, business, accessibility, production, or research conditions when relevant.
- Select the few consequential decisions where the work could have gone another way. Explain the options, evidence, tradeoffs, and why the chosen direction mattered.
- Put evidence beside the claim it supports. Use research observations, iterations, interface states, production details, stakeholder decisions, or results; do not use polished visuals without explaining their relevance.
- Separate my contribution from collaborators' contributions and distinguish measured results, observed behavior, approved direction, shipped work, and untested hypotheses.
- Never invent metrics or imply business impact without a credible baseline, timeframe, and plausible connection to the work. When no metric exists, name the strongest honest evidence or limit.
- End with a specific reflection: what I would preserve, revisit, or investigate next.
- Keep the page scannable with one clear title, descriptive section headings, concise lead-ins, meaningful captions, readable visuals, and a clear overview before the longer process narrative. Do not add sections just to make the case study longer.

Use this page structure unless the source clearly calls for a small adaptation:

- Back link: "All case studies"
- Hero image below the back link and above the title
- Title and one-sentence introduction
- Client, role, and focus metadata
- Standard case-study timeline: Context, Approach, Decisions, Findings, Outcome, Reflection
- Keep the timeline labels consistent across portfolio pages; use project-specific language as subheadings within those sections.
- Put my role and collaborators in the metadata and in the relevant approach or decision narrative, rather than making "Contribution" a standalone early stage by default.
- Context/problem and constraints
- Approach and my role in the work
- Consequential decisions and tradeoffs
- Findings and evidence
- Outcome
- Reflection: what I would preserve, revisit, or investigate

Images and placeholders:

- If I have not supplied an approved public hero image, add a public-safe hero placeholder that clearly describes the intended visual. Do not use an internal image.
- For every visual placeholder identified in the PDF, add a `case-study-artifact` placeholder at the matching narrative point. State what future sanitized visual should replace it.
- When I later upload an approved public image into `public/`, use `getUrl('/filename.ext')` to reference it.
- Put the hero below "All case studies" and above the title.
- Use the approved hero as the corresponding home-page work-card thumbnail when requested.
- Never commit private source images, screenshots, workshop photos, exports, or before-redaction assets.

Navigation and visibility:

- Add the case study to `src/pages/projects.astro` with a public-safe title and tags.
- Add it to the home-page selected-work grid only if I request it.
- Keep all Git-facing names public-safe: commit messages, branch names, page titles, image paths, alt text, and workflow/artifact names.

Before finishing:

- Give me a short red/yellow/green risk summary of how the source material was handled.
- State which elements were generalized, omitted, or recreated.
- Check that the page has one accurate title and one clear main heading, useful link labels, meaningful alt text, logical heading structure, keyboard-accessible interactions, visible focus, adequate contrast, responsive reading order, and appropriately sized/compressed images.
- Check that the project overview, navigation, resume, and contact paths work in a fresh browser where those paths are part of the requested change.
- Run the narrowest appropriate validation, normally `npm run build`.
- Do not push, commit, or deploy unless I explicitly ask.

Here is the source material:
[PASTE OR ATTACH PDF HERE]
```

## Intake checklist

Provide the agent with the following, when available:

- Private PDF or source copy.
- A proposed public project title, if you have one.
- Whether the project should appear on the home page.
- Approved public hero image, if ready.
- The PDF's intended visual placeholders and any public-safe visual direction.
- Known NDA, employer, or client restrictions.
- Whether the case study needs to be committed and pushed after review.

## Image handoff

Later, add only approved public images to `public/`. Tell the agent the exact filename and intended placement. The agent should connect it with `getUrl('/filename.ext')`; it should not rename or relocate images without asking.

## Reference implementation

Use [Go-to-Market Process Overhaul](../src/pages/projects/go-to-market-deal-making-process-overhaul.astro) as the current visual and structural reference. Its corresponding private master is intentionally stored outside this repository.