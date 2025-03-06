##  Recipies App
Welcome to the Recipe App repository! This application is designed to help you discover and manage your favorite recipes. Below are the steps to get the project up and running on your local machine.

# React + TypeScript + Vite

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation and running
1. **Clone the repository** `git clone URL`.
2. **install** `npm ci`.
3. Set up environment variables
  - Create a .env file in the root directory of the project and add the following environment variable:
  `VITE_APP_API_URL='strapi_api_url'`
  - Replace 'strapi_api_url' with the URL of your Strapi backend. For example, if you're running Strapi locally, it might look like this: `VITE_APP_API_URL='http://localhost:1337/api'`
  **Note:** The .env file is included in .gitignore to prevent sensitive information from being committed to the repository. Make sure to create your own .env file locally.
4. Once the setup is complete, you can start the development server by running: `npm run dev`