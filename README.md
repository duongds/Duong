## Init project with Typescript

- Run cmd
  ```
  npx create-react-app react-demo --template typescript
  ```

## Config Tailwind CSS & PostCSS

- Install Tailwind CSS

  ```
      yarn add tailwindcss postcss autoprefixer -d
      npx tailwindcss init
  ```

- Add config to `postcss.config.js`

  ```
      module.exports = {
          plugins: {
              tailwindcss: {},
              autoprefixer: {},
          },
      }
  ```

- Add config to `tailwind.config.js`

  ```
      module.exports = {
          content: [
              "./src/**/*.{js,jsx,ts,tsx}",
          ],
          theme: {
              extend: {},
          },
      }
  ```

- Add the Tailwind directives to CSS
  ```
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
  ```

## Config alias

- Install craco

  ```
      yarn add @craco/craco -d
  ```

- Add file `craco.config.js`

  ```
  const path = require('path');
  module.exports = {
    webpack: {
        alias: {
        '@': path.resolve(__dirname, 'src'),
        },
    },
  };
  ```

- Update the `scripts` field in the `package.json`

  ```
      "scripts": {
          "start": "craco start",
          "build": "craco build",
          "test": "craco test",
          "eject": "craco eject"
      }
  ```

- Add path to file config
  ```
    {
        "compilerOptions": {
            "baseUrl": "./src",
            "paths": {
                "@src/*": ["src/*"],
            }
        }
    }
  ```

## Config eslint & pretter

- Install eslint

  ```
      yarn add eslint --dev
  ```

- Init eslint

  ```
      yarn run eslint --init
  ```

- Add config in file `.eslintrc.js`

- Install pretter
  ```
      yarn add eslint-config-prettier eslint-plugin-prettier prettier --dev
  ```
- Create file `.prettierrc`

## Config env (env-cmd)

## Router (react-router-dom v6)

- Install

  ```
      yarn add react-router-dom
  ```

- Init routers

  ```
      const router = createBrowserRouter([
          {
              path: "/",
              element: <App />,
          },
      ]);
  ```

- Config router in `index.tsx`

  ```
      <RouterProvider router={router} />
  ```

## Custom API

## Redux

## Common

## Multi language
