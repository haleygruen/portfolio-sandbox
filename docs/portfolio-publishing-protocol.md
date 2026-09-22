# Portfolio Publishing Protocol

## Purpose

This repository is a public-facing portfolio. Case studies should clearly demonstrate the author's role, methods, reasoning, and outcomes without exposing confidential employer, client, customer, participant, or product information.

This document is the working protocol for future chats and edits.

## Two-draft workflow

Every case study has two distinct versions:

1. **Private master draft:** The complete source record, including original facts, terminology, quotes, source references, and any internal context necessary to preserve accuracy. Store it in the private sibling directory, outside this Git repository.
2. **Public-safe portfolio draft:** The sanitized Astro page stored in this repository. It is the only version that may be committed, deployed, or shared publicly.

The private directory is intentionally outside the public repository. Do not create, copy, or move private drafts, original PDFs, Figma exports, screenshots, source images, notes, data, or "before redaction" files into this repository.

## Public-safe standard

Public pages should allow a reader to understand:

- The problem or context.
- The author's specific contribution.
- The methods and decision-making process.
- Generalized findings.
- The outcome or decisions the work enabled.

They must not allow a reader to reconstruct non-public plans, customer relationships, financial information, internal operations, or unreleased products.

## Content classification

### Green: publish normally

- The author's role and responsibilities.
- Research and design methods.
- General industry or domain context.
- General participant types and non-sensitive scale.
- Original frameworks, process, and reflections.
- Generalized findings and skills demonstrated.
- Publicly available company material, where appropriate.

### Yellow: generalize or recreate

- Company, client, customer, product, team, and vendor names.
- Exact counts, metrics, financial figures, dates, and strategic priorities.
- Internal terminology, process names, tool architecture, and role names.
- Direct participant or employee quotations.
- Internal artifacts, journey maps, roadmaps, and screenshots.

Use meaningful replacements such as "a global B2B technology company," "a cross-functional commercial journey," "a strong majority," or "ahead of a planned launch." Rebuild visuals as original conceptual diagrams rather than editing confidential source material.

### Red: do not publish without explicit permission

- Non-public customer information, contracts, pricing, security information, credentials, or personal data.
- Non-public financial data, product specifications, roadmaps, algorithms, or strategy documents.
- Anything marked confidential or internal, or covered by contractual restrictions.
- Screenshots or files containing confidential information, even if blurred or hidden in the interface.

## Review questions

Review every public paragraph, title, image, filename, and metadata entry before publishing:

1. Could this let someone infer something the organization has not publicly disclosed?
2. Does this detail help a reader understand the author's work?
3. If it is necessary, can it be generalized without weakening the story?
4. Does the combined set of clues identify a company, product, customer, initiative, or person?

Remove unnecessary sensitive detail. Replace necessary sensitive detail with a generalized equivalent.

## Repository and GitHub hygiene

Assume every committed file can become public. Do not rely on CSS hiding, unlinked pages, ignored assets, private-looking folder names, or Git history to protect source material.

Keep GitHub-facing metadata public-safe:

- Use generic commit messages, PR titles, branch names, workflow names, job names, artifact names, and deployment labels.
- Use non-sensitive filenames, paths, alt text, page titles, descriptions, and image metadata.
- Do not add private source filenames, source references, or internal project terminology to the public repository.

## Current implementation

The public-safe Go-to-Market case study is stored at [src/pages/projects/go-to-market-deal-making-process-overhaul.astro](../src/pages/projects/go-to-market-deal-making-process-overhaul.astro). Its corresponding private master draft is kept outside this repository.

## Suggested portfolio note

Use this wording where a portfolio-wide confidentiality note is needed:

> Some project details, names, visuals, and metrics have been generalized or recreated to respect client and employer confidentiality. The underlying research approach, problem framing, and my contributions are represented accurately.