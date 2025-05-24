<div align="center">

![logo](https://cdn.icon-icons.com/icons2/1465/PNG/128/199princess2_100395.png)

### Enhanced daisyUI components for Sveltekit

</div>


# Sara UI

Sara UI is a Typescript and Javascript compatible library that provides a collection of enhanced-by-javascript daisyUI components to Sveltekit.
## Installation

```
npm i saraui
```

## Configuration

Sara UI is built with **daisyui**, which in turn uses **tailwindcss**. Therefore, in order for Sara UI to function correctly, you need to have these packages installed and set up in your project. If that's the case, all you have to do is add Sara UI to _tailwind.config.cjs_:

```
const config = {
  content: [
    ...
    "./node_modules/saraui/**/*.{html,js,svelte,ts}",
    ...
  ],
  ...
}
```

## First step

Set up the SaraProvider at the root of your application:

```
[src/routes/+layout.svelte]

<script lang="ts">
  import { SaraProvider } from "saraui"
  ...
</script>

<SaraProvider>
  <slot></slot>
</SaraProvider>
```

[How to configure Sara UI](https://saraui.dev/provider)

## Components

- [**Buttons**](https://saraui.dev/components/buttons)
- [**Dropdown**](https://saraui.dev/components/dropdown)
- [**ImageUploader**](https://saraui.dev/components/imageuploader)
- [**Loader**](https://saraui.dev/components/loader)
- [**Modals**](https://saraui.dev/components/modals)
- [**Notification**](https://saraui.dev/components/notification)
- [**Scaffold**](https://saraui.dev/components/scaffold)
- [**Selectors**](https://saraui.dev/components/selectors)
