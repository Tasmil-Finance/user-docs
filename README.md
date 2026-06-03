<h1 align="center">Tasmil Finance — Documentation</h1>

<p align="center">
  User documentation for the <a href="https://zyf.ai">Tasmil Finance</a> platform
</p>

<p align="center">
  <img alt="Fumadocs" src="https://img.shields.io/badge/Fumadocs-Next.js-111827?style=for-the-badge" />
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15-111827?style=for-the-badge" />
</p>

---

## Overview

This repository contains the user-facing documentation site for Tasmil Finance, built with [Fumadocs](https://fumadocs.vercel.app) on Next.js.

---

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server (port 3000)
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the docs site.

---

## Project Structure

```
app/
├── (home)/          # Landing page for docs
└── docs/            # Documentation layout and MDX pages

content/
└── docs/            # MDX content files

lib/
├── source.ts        # Content source adapter
└── layout.shared.tsx# Shared layout options
```

---

## Contributing

Documentation improvements are welcome. Open a pull request with your changes.

For major additions (new guides, tutorials), open an issue first to discuss scope.

---

## Related

| Repository | Description |
|------------|-------------|
| [frontend](https://github.com/Tasmil-Finance/frontend) | Tasmil Finance web application |
| [mcp-stellar](https://github.com/Tasmil-Finance/mcp-stellar) | Stellar DeFi MCP tools |
