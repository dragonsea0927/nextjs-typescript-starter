<a href="https://nextjs-gsap-starter.vercel.app">
  <img alt="Next.js TypeScript starter" src="https://nextjs-gsap-starter.vercel.app/static/og-image.png">
</a>

<h1 align="center">Next.js TypeScript starter</h1>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack & Features</strong></a>
</p>

## Introduction

A Next.js TypeScript starter that includes a collection of reusable components, hooks, and utilities to build amazing projects with complex animations and page transitions using GSAP.

## Installation

Yarn

```sh
git clone git@github.com:gcolombi/nextjs-typescript-starter.git project-name
cd project-name
yarn install
```

NPM

```sh
git clone git@github.com:gcolombi/nextjs-typescript-starter.git project-name
cd project-name
npm install
```

> **Warning**
> This starter use [`npm:gsap-trial`](https://www.npmjs.com/package/gsap-trial). If you want to deploy it you need to remove [`ShuffleTextInOut`](https://github.com/gcolombi/nextjs-typescript-starter/blob/master/components/gsap/ShuffleTextInOut.tsx) and [`ImplodeExplodeInOut`](https://github.com/gcolombi/nextjs-typescript-starter/blob/master/components/gsap/ImplodeExplodeInOut.tsx) components because they use bonus plugins, as well as the actual gsap package. Install [`gsap`](https://github.com/greensock/GSAP#npm) package without these components or join the [Club GreenSock](https://greensock.com/club/), install the corresponding package using installation steps in the dashboard and use them.

## Tech Stack & Features

### Framework

-   [Next.js](https://nextjs.org/) - React framework for building performant apps with the best developer experience

### Language

-   [TypeScript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale

### Hosting

-   [Vercel](https://vercel.com/) - Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration

### UI

-   [CSS Modules - CSS/SASS/SCSS](https://nextjs.org/docs/pages/building-your-application/styling/sass) - CSS architecture containing generic and base style, custom configuration, grid, utilities, mixins etc...
-   [`GSAP`](https://github.com/greensock/GSAP) - GSAP is an industry standard JavaScript animation library from GreenSock that lets you craft high-performance animations that work in every major browser. A great place to get started with GSAP and React is to read [GSAP with React](https://gsap.com/resources/React), [GSAP method gsap.context()](<https://gsap.com/docs/v3/GSAP/gsap.context()/>) and [GSAP React Advanced Animation Techniques](https://gsap.com/resources/react-advanced)
-   [`next-themes`](https://github.com/pacocoursey/next-themes) - Perfect Next.js dark mode in 2 lines of code. Support System preference and any other theme with no flashing
-   [`@next/font`](https://nextjs.org/docs/basic-features/font-optimization) - Optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance

### Form

-   Client side

    -   [`react-hook-form`](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation
    -   [`react-toastify`](https://github.com/fkhadra/react-toastify) - Allows you to add notifications to your app
    -   [`yup`](https://github.com/jquense/yup) - Schema builder for runtime value parsing and [validation](https://react-hook-form.com/get-started#SchemaValidation)

-   Serve side
    -   [API Routes](https://nextjs.org/docs/api-routes/introduction) - The form request is managed by an API route using automatic bodyparsing or [formidable](https://github.com/node-formidable/formidable) (A Node.js module for parsing form data, especially file uploads)
    -   [Custom HTML template](https://github.com/gcolombi/nextjs-typescript-starter/blob/master/public/templates/email.html) - Email template with placeholders ready to use
    -   [`yup`](https://github.com/jquense/yup) - Schema builder for runtime value parsing and validation
    -   [`react-google-recaptcha-v3`](https://github.com/t49tran/react-google-recaptcha-v3) - React library for integrating Google ReCaptcha V3 to your App. To use `react-google-recaptcha-v3`, you need to create a recaptcha key for your domain, you can get one from [here](https://www.google.com/recaptcha/about/)
    -   [`@sendgrid/mail`](https://github.com/sendgrid/sendgrid-nodejs) - SendGrid delivers your emails through a cloud-based email delivery platform. To use Sengrid, you need to sign up [here](https://signup.sendgrid.com/)

### Hooks

-   `useElementSize` - This hook helps you to dynamically recover the width and the height of an HTML element. Dimensions are updated on load, on mount/un-mount, when resizing the window and when the ref changes
-   `useIsMounted` - A React hook to check if the component is mounted
-   `useIsomorphicLayoutEffect` - A React helper hook to schedule a layout effect with a fallback to a regular effect for environments where layout effects should not be used (such as server-side rendering)
-   `useLocalStorage` - Persist the state with local storage so that it remains after a page refresh. This can be useful for a dark theme. This hook is used in the same way as useState except that you must pass the storage key in the 1st parameter. If the window object is not present (as in SSR), `useLocalStorage()` will return the default value
-   `useLockedScroll` - This React hook blocks scrolling on a page, a good example is when opening modals
-   `useScrollbar` - A React helper hook to observe scroll position
-   `useSessionStorage` - Persist the state with session storage so that it remains after a page refresh.
-   `useUnsavedChanges` - Prompt the user if they try and leave with unsaved changes
-   `useWindowLocation` - This React Hook retrieves window location
-   `useWindowSize` - This React Hook retrives window dimensions also works on resize

### Code Quality

-   [Prettier](https://prettier.io/) - Opinionated code formatter for consistent code style
-   [ESLint](https://eslint.org/) - Pluggable linter for Next.js and TypeScript
