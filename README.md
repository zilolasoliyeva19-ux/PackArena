# PackArena

PackArena is an Uzbek-language football card pack-opening demo with a collectible-player catalogue, a squad builder, and Pakopedia.

## Features

- 45 player cards in the built-in catalogue, with photo-source fallback and player-profile links.
- Animated pack opening with rarity-weighted demo pulls.
- Collection, virtual balance, squad, formation, custom cards, and daily-gift progress saved in the current browser.
- Pakopedia search and position filters, with Wikipedia biography summaries and direct source links.
- Admin dashboard with server-verified login, demo coin controls, collection reset, and custom-card management.
- Responsive desktop/mobile/WebView layout, app manifest, logo, and favicon.

## Run locally

```bash
npm install
npm run dev
```

The static UI is available at the Vite URL. The admin verification API uses `/api/admin`; when running the Express server with `npm start`, set `ADMIN_SECRET` in the environment first.

## Configure the admin key in Vercel

1. Open the PackArena project in Vercel and go to **Settings → Environment Variables**.
2. Add `ADMIN_SECRET` with a strong secret at least 24 characters long. Do not put the secret in source code, a public file, or `VITE_*` variables.
3. Apply it to Production (and Preview/Development if required), save, then redeploy.
4. Open PackArena → **Admin panel** and enter the same secret.

## Current demo limitations

- Profile name/optional username and game state are stored in the browser, not in a shared user database.
- Admin controls currently edit the current browser's demo data. Shared player catalogue, global coin grants, real multi-user accounts, and moderation require a database and persistent server-side admin actions.
- Player-card ratings and attributes are game values for demo balance, not verified official live performance stats.
- Player portraits load from ESPN/Wikimedia/Wikipedia endpoints; the app attempts a second source, then shows a flag fallback when an image host is blocked or the file is unavailable.
- No real-money purchases, paid subscriptions, or financial transactions are implemented.
- The live leaderboard and real-time fixtures are not connected.
