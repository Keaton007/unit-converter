<!-- Audit created to document current gaps for AdSense resubmission -->
# Content Quality Audit – UnitFlow (unitconverter.it.com)

## 1. High-Level Observations
- **Single-page experience**: The homepage hosts the universal converter, but there are no dedicated landing pages for the top conversion intents (e.g., meters to feet, Celsius to Fahrenheit). Competing converters often have unique pages per intent with explanatory copy, examples, and FAQs.
- **Guides lack task focus**: Category guide pages are educational but generic. They do not walk users through step-by-step conversions, troubleshooting, or workflows (e.g., “convert recipes when traveling between US and EU kitchens”).
- **Navigation depth**: Header only links to Home, Guides, About. There is no surfaced taxonomy for popular converters, glossary, blog, or trust/advertiser pages, so internal linking is shallow.
- **Limited expertise signals**: No author bios, editorial process, or update timestamps. Pages read like marketing copy, not reference-grade resources.
- **Schema/metadata gaps**: There is no structured data describing calculators, FAQs, breadcrumb trails, or organization info.

## 2. Page-by-Page Notes
### Home (`src/app/page.tsx`)
- Strength: polished UI, quick conversions, AI fun facts.
- Gaps:
  - Above-the-fold copy mirrors marketing messaging rather than the specific conversion tasks visitors need.
  - No featured conversion scenarios (cooking, travel, engineering) or links into deeper resources.
  - Educational section is repeated text block; lacks interactive walkthroughs, historical context tables, or sample problems.

### Guides index (`src/app/guides/page.tsx`)
- Strength: grid of categories with short descriptions.
- Gaps:
  - Lacks breadcrumbs or overview of what each category covers (units, formulas, example conversions).
  - No callouts for newly updated guides, downloadable references, or video/visual aids.

### Guide detail (`src/app/guides/[slug]/page.tsx`)
- Strength: uses `categoryEducation` data for overview/history/applications.
- Gaps:
  - No concrete conversion tables, formula breakdowns, or practice problems.
  - No internal links to relevant calculator presets (e.g., “Set converter to miles ↔ kilometers” button per section).
  - Missing FAQs, troubleshooting tips (“Why does my US gallon differ from UK gallon?”), or contextual examples for each application bullet.

### Converter component (`src/components/Converter.tsx`)
- Strength: covers 12 categories with quick conversions and fun facts.
- Gaps:
  - Quick conversion tiles lack supporting explanations/steps.
  - No copy that explains formulas/factors after a user converts.
  - Educational panel reuses same dataset as guides – opportunity to enrich with examples, tables, and citations.

### Trust & Policy pages
- Privacy/Terms are solid. Missing:
  - Dedicated `contact` page.
  - `Editorial policy` / `Advertising disclosure` to indicate quality control.

## 3. Identified Thin Areas (priority)
1. **Popular conversion keywords** (e.g., meter-to-feet, Celsius-to-Fahrenheit, kg-to-lb) do not have standalone landing pages with unique content, examples, and FAQs.
2. **Category guides** need expansion: formulas, scenario walkthroughs, comparison tables, and common mistakes per category.
3. **Navigation / UX** lacks discoverability for guides, trust pages, and featured categories on every page.
4. **Structured data** missing: FAQPage + Calculator schema for converters, BreadcrumbList for guides, Organization schema for site-level trust.
5. **Performance/trust cues**: no Core Web Vitals callouts, uptime claims, changelog, or release notes to show ongoing maintenance.

## 4. Recommended Focus Areas
- Build **Converter Landing Pages** for the top 6-8 intents with:
  - Intro paragraph targeting the search query.
  - Conversion walkthrough, formula, table of common values, use cases, FAQs, and CTA back to the calculator preloaded with units.
- Enhance **Category Guides** with:
  - Step-by-step instructions.
  - Real-world scenario cards.
  - External references/citations for authority.
- Improve **Site Architecture**:
  - Surface “Popular Converters,” “Measurement Guides,” and “Trust Center” links in header/footer.
  - Add contact/editorial policy/FAQ pages.
- Implement **Schema + Metadata**:
  - `FAQPage` and `HowTo` markup on landing pages.
  - `Organization` markup on layout.
  - Update robots/sitemap descriptions after content expansion.

Document prepared Nov 18, 2025.

