# Shopping Cart

This simple shopping cart prototype shows how React components, Redux and NextJS can be used to build a friendly user experience with instant visual updates and scaleable code in SEO optimized ecommerce applications.

[Live Demo](https://github.com/nodejs/node)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Eslint](#eslint)
- [License](#license)

## Features

- Search restaurants menus
- Add and remove menus from the cart
- Handle menu customization
- Filter menus by group
- Items persist in floating cart after page reloads
- Unit tests, storybook
- Responsive design
- Progressive Web Application (PWA)
- Light and Dark theme

## Tech Stack

This project uses a number of open source projects to work properly:

- [React.js](https://github.com/facebook/react), [TypeScript](https://github.com/microsoft/TypeScript) — library & language
- [Next.js](https://github.com/vercel/next.js) — The React Framework for production ready apps
- [Redux](https://github.com/reduxjs/redux), [Redux ToolKit](https://github.com/reduxjs/redux-toolkit) - State management
- [Styled Components](https://github.com/styled-components/styled-components), — CSS in JS styles
- [Material UI](https://github.com/mui-org/material-ui) - Material Design React components for faster and easier web development
- [Prettier](https://github.com/prettier/prettier), [Eslint](https://github.com/eslint/eslint) - code formating and linting tool
- [Jest](https://github.com/facebook/jest), [Enzyme](https://github.com/enzymejs/enzyme) - Testing

## Prerequisites

- [Node.js](https://nodejs.org/en/) v12 or higher + [Yarn](https://yarnpkg.com/) package manager
- [MongoDB](https://www.mongodb.com/) (can be local or remote instance)
- Optionally [VS Code](https://code.visualstudio.com/) editor with [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plug-ins.

## Getting Started

Install it and run:

```bash
# Install Node.js dependencies
$ yarn install
# Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
yarn dev
# Builds the app for production and optimizes the build for the best performance.
yarn build
# Start the server in local
yarn start
```

## Testing

Recipoz server uses Mocha and Chai for testing .To enable integration tests, a testing config file is included in tests directory, where various options and helper methods are defined to suit the needs of the project.

```bash
# run all tests
yarn test
# run unit tests
yarn test:unit
# run integration tests
yarn test:integration
# Run the test watcher
yarn test:watch
# run test coverage
yarn test:coverage
# storybook
yarn storybook
```

## ESLint

```bash
# run lint
yarn lint
# fix lint auto-fixable errors
yarn lint:fix
# watch
yarn lint:watch
```

## License

This source code is licensed under the [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

---

Author: [Léon Komi Logli](https://www.linkedin.com/in/komi-logli-a51ba9151)
