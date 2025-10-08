// Technology categorization for badge system
const techCategories = {
  // Frontend Technologies - Blue Theme
  frontend: [
    'react', 'vue', 'angular', 'svelte', 'next.js', 'nuxt', 'gatsby',
    'typescript', 'javascript', 'html', 'css', 'sass', 'scss', 'less',
    'tailwindcss', 'bootstrap', 'material-ui', 'chakra-ui', 'styled-components',
    'vite', 'webpack', 'parcel', 'rollup', 'esbuild', 'three.js', 'webgl',
    'canvas', 'svg', 'd3', 'chart.js', 'recharts', 'framer-motion',
    'zustand', 'redux', 'mobx', 'jotai', 'valtio', 'swr', 'react-query',
    'axios', 'fetch', 'graphql', 'apollo', 'relay'
  ],
  
  // Backend Technologies - Green Theme
  backend: [
    'node.js', 'express', 'fastify', 'koa', 'hapi', 'nest.js',
    'python', 'django', 'flask', 'fastapi', 'tornado', 'bottle',
    'ruby', 'rails', 'sinatra', 'grape', 'hanami',
    'php', 'laravel', 'symfony', 'codeigniter', 'cakephp',
    'java', 'spring', 'spring-boot', 'play', 'vert.x',
    'c#', 'asp.net', 'dotnet', 'core', 'blazor',
    'go', 'gin', 'echo', 'fiber', 'iris',
    'rust', 'actix', 'warp', 'rocket', 'axum',
    'elixir', 'phoenix', 'plug', 'cowboy'
  ],
  
  // Database Technologies - Orange Theme
  database: [
    'mongodb', 'mysql', 'postgresql', 'sqlite', 'oracle', 'sql-server',
    'redis', 'elasticsearch', 'cassandra', 'dynamodb', 'couchdb',
    'neo4j', 'arangodb', 'influxdb', 'timescaledb', 'clickhouse',
    'firebase', 'supabase', 'planetscale', 'vercel-postgres',
    'prisma', 'sequelize', 'mongoose', 'typeorm', 'drizzle',
    'indexeddb', 'localstorage', 'sessionstorage', 'google-sheets'
  ],
  
  // Tools Technologies - Purple Theme
  tools: [
    'git', 'github', 'gitlab', 'bitbucket', 'docker', 'kubernetes',
    'jenkins', 'github-actions', 'gitlab-ci', 'circleci', 'travis-ci',
    'webpack', 'vite', 'rollup', 'esbuild', 'babel', 'typescript',
    'eslint', 'prettier', 'husky', 'lint-staged', 'jest', 'vitest',
    'cypress', 'playwright', 'testing-library', 'storybook',
    'npm', 'yarn', 'pnpm', 'bun', 'lerna', 'nx', 'rush',
    'figma', 'sketch', 'adobe-xd', 'framer', 'principle'
  ],
  
  // Cloud Technologies - Yellow Theme
  cloud: [
    'aws', 'azure', 'gcp', 'google-cloud', 'vercel', 'netlify',
    'heroku', 'railway', 'render', 'digital-ocean', 'linode',
    'cloudflare', 'fastly', 'bunny-cdn', 'keycdn',
    'firebase', 'supabase', 'appwrite', 'pocketbase',
    'stripe', 'paypal', 'square', 'razorpay',
    'sendgrid', 'mailgun', 'twilio', 'pusher', 'socket.io'
  ],
  
  // Language Technologies - Red Theme
  language: [
    'javascript', 'typescript', 'python', 'java', 'c#', 'c++', 'c',
    'ruby', 'php', 'go', 'rust', 'swift', 'kotlin', 'dart',
    'scala', 'clojure', 'haskell', 'erlang', 'elixir', 'f#',
    'html', 'css', 'sass', 'scss', 'less', 'stylus',
    'sql', 'graphql', 'json', 'xml', 'yaml', 'toml',
    'markdown', 'latex', 'r', 'matlab', 'julia'
  ]
};

// Function to categorize a technology
export function categorizeTechnology(tech) {
  const normalizedTech = tech.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  for (const [category, technologies] of Object.entries(techCategories)) {
    if (technologies.some(t => 
      normalizedTech.includes(t.toLowerCase().replace(/[^a-z0-9]/g, '')) ||
      t.toLowerCase().replace(/[^a-z0-9]/g, '').includes(normalizedTech)
    )) {
      return category;
    }
  }
  
  // Default to tools if no category found
  return 'tools';
}

// Function to parse technology strings and return categorized arrays
export function parseTechnologies(techString) {
  if (!techString) return [];
  
  return techString.split(/\s+/).map(tech => ({
    name: tech.trim(),
    category: categorizeTechnology(tech.trim())
  }));
}

// Function to get all unique categories from a technology string
export function getCategoriesFromTechString(techString) {
  const technologies = parseTechnologies(techString);
  return [...new Set(technologies.map(t => t.category))];
}

export default techCategories;
