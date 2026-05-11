# Reflection

## 1. The hardest bug I hit this week

The hardest bug I faced was related to Firebase integration and dynamic routing inside the Next.js App Router. Initially, the app worked locally, but after deployment the dynamic audit pages failed because the environment variables were not configured correctly in Vercel. I first assumed the issue was with Firestore permissions, then suspected that the route params were incorrect. After debugging step-by-step, I realized the private Firebase key formatting was breaking in production because newline characters were not being parsed correctly. I fixed this by replacing escaped newline characters using `.replace(/\\n/g, "\n")`. I also had to verify that the dynamic route structure matched the App Router conventions exactly. The debugging process taught me how sensitive production deployments are compared to local environments.

## 2. A decision I reversed mid-week

Initially, I planned to generate all recommendations directly using LLM prompts. Midway through development, I reversed this decision and switched to a deterministic rule-based audit engine. The main reason was reliability and testing. AI-generated recommendations sounded impressive, but the outputs were inconsistent and difficult to verify automatically. Since the assignment required automated tests and predictable outputs, I realized a rules engine was the better architectural choice. I still kept AI-style summaries for the UX layer while making the actual pricing logic deterministic.

## 3. What I would build in week 2

If I had another week, I would build benchmarking features comparing a company’s AI spend against similar teams. I would also add PDF export support, historical audit tracking, and organization-level dashboards. Another improvement would be integrating live pricing APIs or automated pricing scrapers so the audit engine could update itself dynamically instead of relying on manually maintained pricing rules.

## 4. How I used AI tools

I used ChatGPT heavily for debugging, architecture planning, and improving implementation speed. I used it to generate boilerplate code, refine Firebase integration logic, and help structure tests and documentation. However, I did not fully trust AI-generated code without reviewing it carefully. One specific example was when AI-generated test logic referenced incorrect field names that did not match my actual audit engine return structure. I caught the mismatch manually while debugging failed tests. This reinforced the importance of understanding the code rather than blindly accepting generated outputs.

## 5. Self-rating

### Discipline — 8/10

I consistently worked through deployment, testing, and debugging issues even when the stack became frustrating.

### Code quality — 7/10

The project is functional and reasonably organized, though the pricing logic could be abstracted further.

### Design sense — 8/10

I focused heavily on creating a polished SaaS-style UI with strong gradients, spacing, and visual hierarchy.

### Problem-solving — 8/10

I handled deployment, Firebase, testing, and routing issues independently through iterative debugging.

### Entrepreneurial thinking — 7/10

I designed the product around viral sharing and lead capture, though there is still room to improve the growth model and monetization strategy.
