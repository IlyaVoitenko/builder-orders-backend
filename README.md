# builder-orders-backend

Send data with a translation to the client like English, Germany languages

## Installation

Use only package manager [yarn] to install dependencies.

```bash
yarn
```

## Configuration

# Logging Configuration:

- The application uses the morgan middleware for logging HTTP requests.
- Log format depends on the environment: "dev" in development mode and "short" in other environments.

# CORS Configuration:

- Cross-Origin Resource Sharing is enabled using the cors middleware with a wildcard origin (\*), allowing requests from any origin.

# JSON Parsing Middleware:

- The application uses express.json() middleware for parsing incoming JSON requests.
  Internationalization Middleware:

- i18nextMiddleware.handle(i18next) is used to handle internationalization using the i18next library.

# Static File Serving:

- Static localization files are served from the public/locales directory using express.static() middleware.

# Error Handling Middleware:

- Error handling middleware is defined to handle both 404 Not Found errors and internal server errors (500).
- 404 middleware responds with a JSON message "not found" and a status code of 404.
- Internal server error middleware logs the error to the console and responds with a JSON message containing the error message and a status code of 500.

## Usage

# To use this Express application:

1.  Install the required dependencies using npm or yarn.
2.  Configure environment variables using a .env file.
3.  Start the server using node app.js or a similar command.

//////////////////////////////////////////////////////////

# Documentation for Localization Code using i18next

//////////////////////////////////////////////////////////

# Description

This code is used to configure the initialization of the i18next library, which provides localization (multilingual) support in your application.

# Dependencies

1. i18next: A library for localization in web applications.
2. i18next-node-fs-backend: A plugin for i18next that allows loading localization files from the Node.js file system.
3. i18next-express-middleware: Module providing facilities for language detection in Express requests.

## Usage

1. Setting Localization File Paths:

- The path to the localization files is specified in the loadPath property in the backend object.

- Default path: builder-orders-backend/public/locales/{{lng}}.json.

- {{lng}} is a parameter that will be replaced with the language code during the loading of localization files.

2. Initialization Parameters:

- debug: Set to true to enable i18next debugging mode.

- detection: Configuration for detecting the user's language.

- saveMissing: Set to true to save missing phrases in localization files.

- fallbackLng: The language that will be used as a fallback if a translation for the current language is not found.

- preload: An array of languages to be preloaded.

3. Handling Initialization Errors:

- If an error occurs during the initialization of i18next, it will be logged to the console.

4. Exporting the i18next Object:

- After initialization, the i18next object is exported for further use in your application.
