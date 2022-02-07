

# TvMaze Webapp

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img alt="Nx logo" src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

## Demo

https://tvmaze-webapp-yagolopez.vercel.app/

## Install

Clone or download the repository

Go to project directory and run `npm install` to install dependencies

## Development server

Run `npx nx serve tvmaze-webapp` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `npx nx build tvmaze-webapp` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npx nx test tvmaze-webapp` to execute the unit tests via [Jest](https://jestjs.io).

## Running end-to-end tests

Run `npx nx run tvmaze-webapp-e2e:e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io) in headless mode

Run `npx nx run tvmaze-webapp-e2e:e2e --watch` to open Cypress UI and run tests in interactive mode

Note: run e2e tests without using the development server to avoid port conflicts

## Running the linter

Run `npx nx run tvmaze-webapp:lint` to run the linter and to make static code analysis.

## Understand the monorepo workspace

This monorepo contains two projects:

- An **app** called `tvmaze-webapp`
- A **library** used by the app called `react-query-crud`

Run `npx nx dep-graph` to see a diagram of the dependencies of the project.

## Tech Stack

- NextJS
- TypeScript
- Formatting and Static Code Analysis:
  - Prettier
  - ESLint
- [Material UI](https://mui.com/) component library
- Testing
  - Unit Testing: Jest and React Testing Library
  - E2E Testing: Cypress


## Architecture

- **Use of a Data Abstraction Layer** (DAL)
- **Decoupling of frontend from backend**: the purpose is to use a common interface with different implementations for real data, mock data or even Graphql. So changing the way of getting data should not affect front-end code
- The app uses some **OOP principles and patterns**
  - Domain entities are models like `ITvShow`, for example
  - Use of *Repository Pattern*
  - Use of *Singleton Pattern* to avoid creating new instances of repositories each re-render
- Abstraction layer functionality is grouped in a library I created ad hoc called `react-query-crud` (based in React Query). In this case it only reads data but usually DAL executes CRUD operations
- **Asynchronous State** is managed using [React Query](https://react-query.tanstack.com/) library:
  - It provides a cache system to manage **server state** (asynchronous requests): 
  - It optimizes and caches requests: requests made against TvMaze API endpoints with same parameters are loaded from browser cache avoiding new requests
  - It keeps UI data updated making requests automatically when browser window recover focus
  - Failure protection: If a request fails, React Query will try three times more before throwing an error
- **Synchronous State** is managed using [Redux Toolkit](https://redux-toolkit.js.org/)
  - Used for UI state
  - Used for *synchronous* updates
- There is an endpoint defined as Nextjs Servless Function
  - [/api/mock-tvshows](https://tvmaze-webapp-yagolopez.vercel.app/api/mock-tvshows) It is used for testing purposes and returns mock data from a JSON file
