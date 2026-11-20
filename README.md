# NestNear — PG Accommodation Finder

A student-focused PG discovery and comparison web app, built in the same style of frontend MVP as HostelBites. It helps university students discover PG accommodation, understand costs, compare facilities, save options and read resident reviews.

## Tech stack
- Next.js 15 App Router
- React 19 with JavaScript / JSX
- CSS (responsive custom design system)
- React Context for shared state
- LocalStorage for demo persistence
- Realistic sample data (no backend required)

## Run locally
1. Install Node.js 18.18+ (Node 20+ recommended).
2. Extract this ZIP and open the `pg-stay-finder` folder in VS Code.
3. Open a terminal in that folder and run:

   ```bash
   npm install
   npm run dev
   ```
4. Visit http://localhost:3000

For a production build, run `npm run build` and then `npm start`.

## Main routes
| Route | Purpose |
|---|---|
| `/` | Landing page, quick search and featured PGs |
| `/pgs` | Searchable listings with rent, gender, food and sort filters |
| `/pgs/[id]` | PG details, cost breakdown, amenities and resident reviews |
| `/saved` | Saved accommodation shortlist |
| `/compare` | Side-by-side comparison (up to 3 stays) |
| `/owner-login` | Demo property-owner sign-in |
| `/owner-dashboard` | Add and preview PG listings |

## Demo owner access
- Email: `owner@nestnear.demo`
- Password: `NestNear@2026`

The owner login is intentionally a frontend demonstration, not secure authentication. Any non-empty email and password will continue to the dashboard. Do not use real credentials.

## Features
- Search by PG name, area, city or university.
- Filter by monthly rent, accommodation preference and food inclusion.
- Sort by recommended, rent or rating.
- Save and compare accommodation options.
- View sample reviews, amenities, house rules, deposit and recurring charges.
- Add owner listings to browser storage from the dashboard.
- Responsive layout for desktop, tablet and mobile.

## Project structure
```text
pg-stay-finder/
├── app/
│   ├── page.jsx
│   ├── globals.css
│   ├── layout.jsx
│   ├── pgs/                 # Listing and dynamic detail routes
│   ├── saved/
│   ├── compare/
│   ├── owner-login/
│   └── owner-dashboard/
├── components/              # Navbar, Footer, PGCard
├── context/                 # Shared React Context + LocalStorage
├── data/                    # Sample PG listings and reviews
├── docs/                    # Product, scope and wireframe notes
├── package.json
└── README.md
```

## Data and limitations
- All PG listings, prices, reviews and owner metrics are sample data for an academic prototype.
- Saved items, compare selections and owner-created listings are stored in the current browser only.
- No real booking, payment, identity verification, map service, messaging, moderation or authentication backend is connected.
- Contact/enquiry actions are demo interactions. Students should independently verify a property's rent, deposit, safety, facilities and availability before making a real decision.

## Suggested future improvements
1. Add a database and secure student/owner authentication.
2. Add property-owner verification and listing moderation.
3. Integrate maps and commute-time estimates.
4. Add availability calendars and enquiry messaging.
5. Add verified resident reviews and report-abuse workflow.

## Local project area
The sample catalogue is focused on the Adyar area around Sahyadri College of Engineering and Management and the Valachil area around Srinivas Institute of Technology, both in Mangaluru. PG names, rents, deposits, distances, ratings and reviews are illustrative demo data only; they are not verified real listings. Confirm exact locations, routes, availability and charges directly before making accommodation decisions.
