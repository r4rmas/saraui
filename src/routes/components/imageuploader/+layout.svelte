<script lang="ts">
  import { Colors, Roundeds } from "$lib/enums.js"
  import type { ColorString, RoundedString } from "$lib/types.js";
  import Layout from "../../lib/Layout.svelte";

  const colors: ColorString[] = Object.values(Colors)
  const roundeds: RoundedString[] = Object.values(Roundeds)
</script>

<Layout>
  <slot></slot>
  <svelte:fragment slot="types">
    <h2 class="title mt-4">Props</h2>
      <div class="prop-container">
        <span class="prop">color?:</span>
        <p class="prop-value">
          "{colors.join('" | "')}"
        </p>
      </div>
      <div class="prop-container">
        <span class="prop">rounded?:</span>
        <p class="prop-value">
          "{roundeds.join('" | "')}"
        </p>
      </div>
      <div class="prop-container">
        <span class="prop">acceptedFileExtensions?:</span>
        <p class="prop-value">
          string
        </p>
      </div>
      <div class="prop-container">
        <span class="prop">isEditable?:</span>
        <p class="prop-value">
          boolean
        </p>
      </div>
      <div class="prop-container">
        <span class="prop">name?:</span>
        <p class="prop-value">
          string
        </p>
      </div>
      <p class="text-xs mb-4">
        name is used to identify the file in a FormData value
      </p>
      <div class="prop-container">
        <span class="prop">state?:</span>
        <p class="prop-value">
          File
        </p>
      </div>
      <p class="text-xs mb-4">
        you can use this prop to add a placeholder or bind:state to get the file when selected 
      </p>
      <div class="prop-container">
        <span class="prop">icon?:</span>
        <p class="prop-value">
          IconClassString
        </p>
      </div>
      <a href="/icons" 
        class="link link-secondary text-center mx-auto text-xs mb-4"
      >
        Check Icons section
      </a>
      <div class="prop-container">
        <span class="prop">width?:</span>
        <p class="prop-value">
          any posible default spacing value from Tailwind
        </p>
      </div>
      <a href="https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale" 
        class="mx-auto link link-secondary mb-4 text-center text-xs"
      >
        Check Tailwind's default spacing scale
      </a>
  </svelte:fragment>
</Layout>