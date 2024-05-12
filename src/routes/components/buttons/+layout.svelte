<script lang="ts">
  import { ButtonModifiers, ButtonTypes, Colors, IconButtonShapes, Sizes } from "$lib/enums.js"
  import Layout from "../../lib/Layout.svelte"

  const types = Object.values(ButtonTypes)
  const colors = Object.values(Colors)
  const modifiers = Object.values(ButtonModifiers)
  const sizes = Object.values(Sizes)
  const shapes = Object.values(IconButtonShapes)
  const onEvent = "(Event) => void | (Event) => Promise<void>"
</script>

<Layout>
  <slot></slot>
  <svelte:fragment slot="types">
    <h2 class="title mt-4">Props</h2>
    <div class="prop-container">
      <span class="prop">type?:</span>
      <p class="prop-value">"{types.join('" | "')}"</p>
    </div>
    <div class="prop-container">
      <span class="prop">color?:</span>
      <p class="prop-value">"{colors.join('" | "')}"</p>
    </div>
    <div class="prop-container">
      <span class="prop">size?:</span>
      <p class="prop-value">"{sizes.join('" | "')}"</p>
    </div>
    <div class="prop-container">
      <span class="prop">modifier?:</span>
      <p class="prop-value">"{modifiers.join('" | "')}"</p>
    </div>
    <div class="prop-container">
      <span class="prop">isDisabled?:</span>
      <p class="prop-value">boolean</p>
    </div>
    <div class="prop-container">
      <span class="prop">isLoading?:</span>
      <p class="prop-value">boolean</p>
    </div>
    <div class="prop-container">
      <span class="prop">onClick?:</span>
      <p class="prop-value">{onEvent}</p>
    </div>
    <div class="prop-container">
      <span class="prop">(Button) width?:</span>
      <p class="prop-value">any posible fixed width value from Tailwind's default config</p>
      <a href="https://tailwindcss.com/docs/width" class="link link-secondary text-sm text-center mx-auto">
        Check Tailwind's width values
      </a>
    </div>
    <div class="prop-container">
      <span class="prop">(IconButton) tooltip:</span>
      <p class="prop-value">string</p>
    </div>
    <div class="prop-container">
      <span class="prop">(IconButton) shape?:</span>
      <p class="prop-value">"{shapes.join('" | "')}"</p>
    </div>
  </svelte:fragment>
</Layout>