<div align="center">

![logo](https://cdn.icon-icons.com/icons2/1465/PNG/128/199princess2_100395.png)

### daisyUI components for Svelte/Sveltekit

</div>


# Sara UI

## Installation

```
npm i saraui
```

## Configuration

Sara UI is a library built on top of **daisyui**, which in turn uses **tailwindcss**. Therefore, for Sara UI to work properly, you need to have both packages installed in your project. If both are already installed, all you have to do is add Sara UI to _tailwind.config.cjs_:

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

<script>
  import { SaraProvider } from "saraui"
</script>

<SaraProvider>
  <slot></slot>
</SaraProvider>
```

[**See all the provided components**](https://saraui.com/components)