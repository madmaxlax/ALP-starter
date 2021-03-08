# React ALP starter


uses https://graphql-code-generator.com/ to generate types based on the schema! in /src/models/types.ts

## Get Started

```
yarn

yarn start
```

and it will run at http://localhost:3000/main/page-name

## Structure 

 - [/public](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/public)
    - This is a create-react-app feature, raw files that will be served as-is, not involved in the compiling process at all, such as index.html and favicon.ico
 - [/Assets](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/src/assets)
    - This is a create-react-app feature, for items such as scss or images that need to be used in your code or compiled
 - [/Components](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/src/components)
    - Where you put universally-reusable components for your app (such as link, or custom button)
    - [/Components/Typography](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/src/components/typography)
      - A place to store custom text components, as you will likely need more than the built-in default [variants (body1, body2, h1-h6...)](https://material-ui.com/components/typography/)
- [/Layouts](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/src/layouts)
    - Holding place for various layouts of your pages. Likely your pages will have a consistent header and footer and maybe menu. You could put that all in 1 layout here. Another layout might be your un-auth'd login page, which would have less templated stuff in it. Inspired by https://github.com/creativetimofficial/material-dashboard-react
- [/models](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/src/models)
    - Where your (generated) GraphQL is saved, as well as any cache-related work, and any makeVar [reactive variables]*(https://www.apollographql.com/docs/react/local-state/reactive-variables/)
- [/pages](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/src/pages)
    - Where your various routes or different whole pages life. Each folder can contain the page content as well as any components that are unique to that page and wouldn't be shared across to the whole app (and moved to the /components folder)
- [/utils](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/src/utils)
    - Holding place for typescript models or other files / functions / utilities
- [/routes.tsx](https://github.com/madmaxlax/react-materialui-router-typescript-starter/blob/main/src/Routes.tsx)
    - List of routes/ references to the various pages
- [/theme.tsx](https://github.com/madmaxlax/react-materialui-router-typescript-starter/blob/main/src/theme.tsx)
    - Starter for custom theming 