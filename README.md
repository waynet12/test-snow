# Hello World Fluent App for ServiceNow

A minimal [ServiceNow Fluent](https://docs.servicenow.com/csh?topicname=servicenow-fluent.html&version=latest) app that works with the ServiceNow SDK. It defines a scoped application with one table and a single "Hello World" record.

## What’s in this app

- **Scope:** `x_hello_world`
- **Table:** `x_hello_world_message` with a string column `message`
- **Record:** One row with message `"Hello World"`

## Prerequisites

- **Node.js** v18.16.1 or later (v20+ recommended)
- **npm** v8.19.3 or later
- A ServiceNow instance (Yokohama or later) for deployment

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build the app (compiles Fluent to platform metadata):

   ```bash
   npm run build
   ```

3. Install the app on your instance (after configuring the SDK for your instance):

   ```bash
   npm run install:app
   ```

   You may need to set up a profile or credentials for your ServiceNow instance. See [Configuring the ServiceNow SDK](https://docs.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/concept/configuring-servicenow-sdk.html).

## Project layout

```
├── now.config.json       # Scope and app config (scope: x_hello_world)
├── package.json          # Scripts and @servicenow/sdk dependency
├── src/
│   └── fluent/
│       ├── hello-table.now.ts   # Table x_hello_world_message
│       ├── hello-record.now.ts  # One "Hello World" record
│       └── generated/           # Build output (optional)
└── README.md
```

## Customization

- **Scope / app name:** Edit `scope` in `now.config.json` and update table/record names in `src/fluent/*.now.ts` to match (e.g. keep the `x_<scope>_` prefix).
- **Table/columns:** Change `src/fluent/hello-table.now.ts` (add columns with `StringColumn`, `IntegerColumn`, `DateTimeColumn`, etc. from `@servicenow/sdk/core`).
- **Data:** Change or add records in `src/fluent/hello-record.now.ts` using the `Record()` API.

## Links

- [ServiceNow SDK](https://www.npmjs.com/package/@servicenow/sdk)
- [ServiceNow Fluent overview](https://docs.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/concept/servicenow-fluent.html)
- [SDK examples (GitHub)](https://github.com/ServiceNow/sdk-examples) (e.g. `hello-world-sample`, `table-sample`)
