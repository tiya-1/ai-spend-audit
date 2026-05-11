## Day 1 — 2026-05-08
**Hours worked:** 5

**What I did:** Built the initial AI audit flow using Next.js and Tailwind CSS. Created the spend input form with fields for AI tool, plan, seats, spend, and use case. Implemented localStorage persistence so user inputs survive refreshes. Started building the core audit engine logic for calculating savings and recommendations.

**What I learned:** Learned how to structure a scalable Next.js App Router project and how client/server boundaries work in modern Next.js. Also improved my understanding of state management with React hooks.

**Blockers / what I'm stuck on:** Had trouble deciding whether audit calculations should happen fully client-side or through API routes. Also spent time debugging form hydration issues caused by localStorage during initial render.

**Plan for tomorrow:** Finish the audit engine logic, improve result UI styling, and begin Firebase integration for saving audit results.


## Day 2 — 2026-05-09
**Hours worked:** 6

**What I did:** Integrated Firebase Firestore into the project for storing audit data and leads. Added API routes for saving and fetching audit results. Created dynamic public result URLs using audit IDs. Built the results page UI with savings cards, recommendation sections, and AI-generated summaries.

**What I learned:** Learned how to securely initialize Firebase Admin SDK in Next.js using environment variables and server-side API routes. Also learned the difference between client Firebase SDK and admin SDK usage.

**Blockers / what I'm stuck on:** Faced issues with incorrect imports between Firebase client/admin files and had route conflicts inside the App Router. Also encountered a “default export is not a React component” error due to page structure mistakes.

**Plan for tomorrow:** Fix remaining recommendation rendering issues, implement Open Graph metadata for shareable audit links, and prepare the project for deployment.


## Day 3 — 2026-05-10
**Hours worked:** 7

**What I did:** Finished the public shareable audit result flow and implemented copy-link functionality. Added dynamic metadata generation for Open Graph and Twitter preview support on result pages. Improved recommendation logic and cleaned up several UI inconsistencies. Tested dynamic result routes and API fetching.

**What I learned:** Learned how Next.js metadata generation works in dynamic routes and how Open Graph tags improve social sharing previews. Also improved debugging skills around asynchronous route params and server rendering.

**Blockers / what I'm stuck on:** Still need to fully test how Open Graph previews behave after production deployment because localhost does not generate external previews properly. Need to add automated tests and CI workflow next.

**Plan for tomorrow:** Deploy the application to Vercel, configure production environment variables, add audit engine tests, and start writing architecture and documentation files.

## Day 4 — 2026-05-11

**Hours worked:** 3

**What I did:**
Configured automated testing using Vitest, wrote 5 audit engine test cases, created a GitHub Actions CI workflow for linting and tests, and started preparing documentation files including README, ARCHITECTURE, and TESTS documentation.

**What I learned:**
Learned how automated CI pipelines improve reliability and how small mismatches between implementation and test expectations can quickly break test suites.

**Blockers / what I'm stuck on:**
Had some issues with import paths and mismatched field names between the audit engine and test assertions.

**Plan for tomorrow:**
Finish remaining documentation, improve product positioning files, and polish the final deployed experience.
