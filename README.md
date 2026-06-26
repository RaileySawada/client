# Scafkit Client

Frontend client for a PERN stack application, built to be clean, typed, fast to clone, and easy to extend.

![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?style=for-the-badge&logo=typescript&logoColor=fff)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=fff)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-ff4154?style=for-the-badge&logo=reactquery&logoColor=fff)

## Overview

Scafkit Client is the frontend layer of a PERN stack project. It uses Vite for fast development, React for UI, TypeScript for safer code, Tailwind CSS for styling, React Router for client routing, and TanStack Query for server-state management.

This client is designed as a scaffold: clone it, connect it to your Express API, and start building features without spending the first hour arranging folders.

## Installation

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Folder Structure

```txt
client/
├── public/
│   ├── icons/
│   ├── humans.txt
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── providers.tsx
│   │   └── router.tsx
│   ├── assets/
│   │   └── styles/
│   │       └── index.css
│   ├── config/
│   │   ├── constants.ts
│   │   └── env.ts
│   ├── lib/
│   │   └── queryClient.ts
│   └── pages/
│       └── NotFound.tsx
├── .env.example
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Environment Variables

Vite only exposes client environment variables that start with `VITE_`.

| Variable | Example | Purpose |
| --- | --- | --- |
| `VITE_APP_NAME` | `SCAFKIT` | Name of the frontend app. |
| `VITE_API_URL` | `http://localhost:5173/api` | Base URL used when connecting to the backend API. |
| `VITE_APP_VERSION` | `1.0.0` | App version for metadata or UI display. |

Example `.env`:

```env
VITE_APP_NAME=SCAFKIT
VITE_API_URL=http://localhost:5173/api
VITE_APP_VERSION=1.0.0
```

Client-side environment access is centralized in:

```txt
src/config/env.ts
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Runs TypeScript project checks and creates a production build. |
| `npm run lint` | Runs Oxlint against the project. |
| `npm run preview` | Serves the production build locally for previewing. |

## Tech Stack

| Tool | Role |
| --- | --- |
| React | UI library for building the client interface. |
| TypeScript | Static typing for safer application code. |
| Vite | Development server and production bundler. |
| Tailwind CSS | Utility-first styling system. |
| React Router | Client-side routing. |
| TanStack Query | Server-state fetching, caching, and synchronization. |
| Oxlint | Fast JavaScript and TypeScript linting. |

## Why This Structure

The structure is intentionally small, but not flat. It gives the frontend a clear shape from day one while staying flexible enough for a growing PERN app.

| Directory | Why it exists |
| --- | --- |
| `src/app` | Holds the application entry, route setup, and global providers. |
| `src/pages` | Stores route-level screens and page components. |
| `src/config` | Keeps environment and shared configuration away from UI code. |
| `src/lib` | Stores reusable library setup, such as the TanStack Query client. |
| `src/assets/styles` | Keeps global CSS in a predictable location. |
| `public` | Stores static assets copied directly into the final build. |

This layout avoids over-engineering early while still leaving natural homes for features, API clients, hooks, components, and shared utilities as the application grows.

## PERN Context

This repository is the client-facing side of the stack:

```txt
PostgreSQL  ->  Express  ->  React Client  ->  Node.js Runtime
```

The React client should communicate with the backend through the configured `VITE_API_URL`. Server-only values such as database credentials, JWT secrets, and private API keys should stay in the backend environment, never in this client.
