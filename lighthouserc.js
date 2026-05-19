module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3001/', 'http://localhost:3001/docs', 'http://localhost:3001/docs/getting-started'],
      startServerCommand: 'pnpm build && pnpm start -- -p 3001',
      startServerReadyPattern: 'Ready in',
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
