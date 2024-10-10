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

## Common

## Redux (reduxjs/toolkit )

- Install

  ```
      yarn add @reduxjs/toolkit react-redux
  ```

- Create file `store.ts`

  ```
      export const store = configureStore({
          reducer: rootReducer,
          middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
              serializableCheck: false,
          }),
      })
  ```

- Add provider in `index.tsx`

  ```
      <Provider store={store}>
          <App />
      </Provider>
  ```

- Create slice

  ```
      export const userSlices = createSlice({
          name: 'user',
          initialState,
          reducers: {
              setProfile: (state, action: PayloadAction<boolean>) => {
                  state.profile = action.payload
              },
          },
      })
  ```

- Add reducer to store

  ```
      export const { setProfile } = userSlices.actions
      export default userSlices.reducer
  ```

- Use reducer in component

  ```
      const dispatch = useDispatch();
      const count = useSelector(state => state.counter.value);
      <button onClick={() => dispatch(increment())}>Increment</button>
  ```

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

## Multi language (react-intl)
