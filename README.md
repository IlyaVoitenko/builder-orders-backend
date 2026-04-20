# Builder Orders Backend

Express-based backend service that delivers localization files for the Builder project.

## What This Service Does

- Serves translation JSON files from `public/locales`.
- Provides an API endpoint to fetch locale files by language code.
- Uses `i18next` with filesystem backend and Express middleware.
- Includes basic request logging, CORS support, and error handling.

## Tech Stack

- `Node.js` + `Express`
- `i18next`, `i18next-node-fs-backend`, `i18next-express-middleware`
- `morgan` for HTTP logs
- `cors` for cross-origin requests
- `nodemon` for local development runtime
- `vercel` deployment config (`vercel.json`)

## Project Structure

```text
.
├── app.js                         # Express app and middleware setup
├── server.js                      # Server bootstrap (port 4001)
├── controllers/
│   └── translations.js            # Translation file response logic
├── routes/api/translation/
│   └── index.js                   # Translation routes
├── i18next/
│   └── index.js                   # i18next configuration
├── public/locales/
│   ├── de.json
│   └── en.json
└── vercel.json
```

## Prerequisites

- Node.js 18+ recommended
- Yarn package manager

## Installation

```bash
yarn install
```

## Run Locally

```bash
yarn start
```

Current startup script:

- `yarn start` -> `nodemon server.js`
- Server listens on `http://localhost:4001`

## API

### Health-style route

- `GET /api/translations/`
- Response: `"hello"`

### Fetch translation file

- `GET /api/translations/locales/:locale`
- Example: `GET /api/translations/locales/en`
- Success: returns JSON file content from `public/locales/:locale.json`
- Not found: returns `404` with `"File not found"`

## i18n Behavior

The service initializes `i18next` with:

- `fallbackLng: "de"`
- `preload: ["de", "en"]`
- Files loaded from: `public/locales/{{lng}}.json`
- Language detection order: query string, then cookie

## Middleware and Runtime Notes

- Logging: `morgan` with `dev` format in development, `short` otherwise
- CORS: currently open (`origin: "*"`)
- JSON body parsing enabled via `express.json()`
- Static files served from `public/locales`
- 404 handler returns `{ "message": "not found" }`
- Error handler returns `{ "message": err.message }`

## Deployment

`vercel.json` is configured to route all requests to `server.js`.

## Project Analysis

### Current strengths

- Simple, focused architecture (single responsibility: translation delivery).
- Clear route/controller separation.
- i18next filesystem configuration is straightforward and easy to maintain.

### Risks and improvement opportunities

- **Hardcoded port**: `server.js` uses fixed `4001`.  
  Better: use `process.env.PORT || 4001` for cloud compatibility.
- **Open CORS policy**: `origin: "*"` is permissive for production.  
  Better: restrict origins via environment-based allowlist.
- **Synchronous filesystem check** in controller (`fs.existsSync`) can block event loop under load.  
  Better: use async `fs.promises.access` or stream with proper error handling.
- **No automated tests**: behavior regressions are likely over time.  
  Better: add integration tests for translation route and 404/error flows.
- **Error logging** uses `console.log`; production apps benefit from structured logging.

## License

MIT
