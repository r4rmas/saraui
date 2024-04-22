<div align="center">

![logo](https://cdn.icon-icons.com/icons2/1465/PNG/128/199princess2_100395.png)

### daisyUI components for Svelte/Sveltekit

</div>


# Sara UI

Sara UI is a Typescript and Javascript compatible library that provides a collection of daisyUI components for Svelte/Sveltekit.
## Installation

```
npm i saraui
```

## Configuration

Sara UI is built on top of **daisyui**, which in turn uses **tailwindcss**. Therefore, in order for Sara UI to function correctly, you need to have these packages installed and configured in your project. If that's the case, all you have to do is add Sara UI to _tailwind.config.cjs_:

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

[**See all the provided components**](https://saraui.com/components)
