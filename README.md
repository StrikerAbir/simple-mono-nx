For create nx monorepo workspace
## npx create-nx-workspace@latest project-demo

For crate another project in the apps directory:
## nx g @nx/next:app SecondPage --directory=apps/SecondPage

For modular federation way microservice share
## npm install webpack
## npm install @module-federation/nextjs-mf

In main project use this nextconfig and create .env.local file:
----------------------------------------------------------------
 webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'MainPage',
        remotes: {
          SecondPage:
            'SecondPage@http://localhost:3001/_next/static/chunks/remoteEntry.js', // Ensure the URL matches where secondproject is running
        },
        shared: {},
        filename: 'static/chunks/remoteEntry.js',
      })
    );
    return config;
  },

In .env.local file set : 
## NEXT_PRIVATE_LOCAL_WEBPACK=true

In Other non main projects set same .env.local file and update nextconfig:
-------------------------------------------------------------------
webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'SecondPage',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Index': './pages/index',
        },
        shared: {},
      })
    );
    return config;
  },


For create shared-ui:
## nx g @nx/react:library shared-ui --directory=libs/shared-ui

libs/
└── shared-ui/
    └── src/
        └── lib/
            ├── buttons/
            │   ├── PrimaryButton.tsx
            │   ├── SecondaryButton.tsx
            │   ├── index.ts ----> export * from './PrimaryButton'; export like this for every tsx
            ├── modals/
            │   ├── Modal.tsx
            │   ├── index.ts
            ├── drawers/
            │   ├── Drawer.tsx
            │   ├── index.ts
            ├── inputs/
            │   ├── TextInput.tsx
            │   ├── Checkbox.tsx
            │   ├── index.ts
            └── index.ts   ------> export * from './lib/buttons' export like this for every folder 


Every project tailwind config file update:
--------------------------------------------
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    join(__dirname, '../../libs/**/*.{ts,tsx,html}'), // Include all files in libs folder
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
