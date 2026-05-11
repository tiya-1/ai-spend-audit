# Architecture

## System Diagram


flowchart TD

A[User Opens App] --> B[Spend Form]

B --> C[runAudit Engine]

C --> D[Generate Savings + Recommendation]

D --> E[Save Audit to Firebase]

E --> F[Dynamic Result URL]

F --> G[Shareable Public Audit Page]


## Data Flow

1. A user enters their AI subscription details into the form.
2. The frontend validates and cleans the input values.
3. The `runAudit()` engine analyzes:

   * current plan
   * tool type
   * spend
   * team size
4. Savings opportunities and recommendations are generated.
5. The audit is stored in Firebase Firestore.
6. A unique public URL is generated for the audit result.
7. The results page fetches audit data dynamically using the audit ID.

## Stack Choice

### Next.js

I chose Next.js because it provides:

* API routes
* dynamic routing
* server rendering
* metadata generation
* deployment simplicity

all inside a single framework.

### Firebase

Firebase simplified backend infrastructure and enabled rapid persistence of audits and leads without managing servers or SQL migrations.

### Tailwind CSS

Tailwind enabled fast iteration and responsive layouts while keeping the UI lightweight.

### Vitest

Vitest provided a fast testing setup for validating the audit engine logic.

## Scaling to 10k Audits/Day

If the system needed to handle 10k audits/day, I would:

* Move audit processing into background jobs
* Add Redis caching
* Introduce rate limiting
* Separate analytics from transactional writes
* Add structured logging and monitoring
* Move pricing rules into database-managed configuration
* Add authentication and abuse prevention
* Optimize Firestore indexing strategy
