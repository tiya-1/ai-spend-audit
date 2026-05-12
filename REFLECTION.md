# Reflection

## 1. The hardest bug I hit this week

The hardest issue I faced was making the audit calculations consistent across the app, automated tests, and deployment pipeline. During development, I repeatedly ran into failing CI checks and incorrect savings calculations caused by mismatched pricing assumptions and field names inside the audit engine. Some tests were failing because the expected recommendation logic did not match the actual pricing rules being returned by the engine.

At first I assumed the problem was caused by Vitest configuration or import path issues. Then I suspected the deployment environment because GitHub Actions sometimes showed passing local tests but failing remote checks. I debugged the issue step-by-step by simplifying the audit logic, manually testing multiple pricing scenarios, and comparing test expectations against the actual returned objects.

Another issue was ESLint and CI repeatedly failing on strict TypeScript rules even though the deployed app itself worked correctly. Eventually I resolved this by updating the ESLint configuration to disable rules that were slowing down development unnecessarily for an MVP project.

The debugging process taught me that consistency between business logic, tests, deployment, and CI configuration is much harder than simply making the UI work locally.

## 2. A decision I reversed mid-week

Initially, I planned to spend more time building bonus features like advanced exports, additional analytics, and extra UI polish. Midway through the project, I reversed that decision and focused instead on documentation quality, automated testing, deployment reliability, and submission completeness.

The reason was practical prioritization. Since the assignment heavily emphasized engineering documentation, architecture reasoning, CI/testing, and entrepreneurial thinking, I realized that completing the core product properly would create a stronger submission than partially finished bonus features.

I was also balancing university exams during the same week, which forced me to think more carefully about scope management and execution priorities. Instead of attempting too many incomplete features, I focused on delivering a stable deployed MVP with working tests, strong documentation, and a polished user experience.

I still maintained a polished SaaS-style UI and full deployment flow, but I prioritized stability, clarity, and completeness over adding more experimental functionality.


## 3. What I would build in week 2

If I had another week, I would build benchmarking features comparing a company’s AI spend against similar teams. I would also add PDF export support, historical audit tracking, and organization-level dashboards.

Another improvement would be integrating live pricing APIs or automated pricing scrapers so the audit engine could update itself dynamically instead of relying on manually maintained pricing rules.

I would also improve authentication and analytics tracking to better understand user behavior and audit completion funnels.

## 4. How I used AI tools

I used ChatGPT heavily for debugging, architecture planning, and improving implementation speed. I used it to generate boilerplate code, refine deployment setup, and help structure tests and documentation.

However, I did not fully trust AI-generated outputs without reviewing them carefully. One specific example was when AI-generated test logic referenced incorrect field names that did not match my actual audit engine return structure. This caused multiple failing tests until I manually reviewed both the engine output and the test expectations.

I also noticed that AI suggestions sometimes optimized for “ideal architecture” instead of practical MVP delivery. I frequently simplified or adjusted generated code to better fit the assignment timeline and deployment constraints.

## 5. Self-rating

### Discipline — 8/10

I consistently worked through deployment, CI, testing, and documentation issues while balancing exams and time constraints.

### Code quality — 7/10

The project is functional and reasonably organized, though some pricing logic could still be abstracted more cleanly.

### Design sense — 8/10

I focused on creating a polished SaaS-style interface with strong spacing, gradients, and visual hierarchy.

### Problem-solving — 8/10

I handled deployment failures, CI issues, testing bugs, and pricing inconsistencies through iterative debugging and experimentation.

### Entrepreneurial thinking — 7/10

I designed the product around AI cost optimization, lead capture, and shareable audit flows, though the monetization and benchmarking strategy could be expanded further.
