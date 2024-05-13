<script lang="ts">
  import CodeCard from "../../lib/CodeCard.svelte"
  import Layout from "../../lib/Layout.svelte"
  import { ButtonModifiers, Colors, IconButtonShapes, Sizes } from "$lib/enums.js"
  import { sidenavConfig, sidenavWidth } from "./displayableCodes.js"

  const shapes = Object.values(IconButtonShapes)
  const modifiers = Object.values(ButtonModifiers)
  const sizes = Object.values(Sizes)
  const colors = Object.values(Colors)
</script>

<Layout>
  <slot></slot>
  <svelte:fragment slot="types">
    <h2 class="title mt-4">Props</h2>
    <div class="prop-container">
      <span class="prop">(Scaffold) sidenavConfig?:</span>
      <p class="prop-value">SidenavConfig</p>
    </div>
    <div class="prop-container">
      <span class="prop">(SidenavButton) tooltip:</span>
      <p class="prop-value">string</p>
    </div>
    <div class="prop-container">
      <span class="prop">(SidenavButton) shape?:</span>
      <p class="prop-value">"{shapes.join('" | "')}"</p>
    </div>
    <div class="prop-container">
      <span class="prop">(SidenavButton) modifier?:</span>
      <p class="prop-value">"{modifiers.join('" | "')}"</p>
    </div>
    <div class="prop-container">
      <span class="prop">(SidenavButton) size?:</span>
      <p class="prop-value">"{sizes.join('" | "')}"</p>
    </div>
    <div class="prop-container">
      <span class="prop">(SidenavButton) color?:</span>
      <p class="prop-value">"{colors.join('" | "')}"</p>
    </div>
    <div class="prop-container">
      <span class="prop">(SidenavItem) href:</span>
      <p class="prop-value">string</p>
    </div>
    <div class="prop-container">
      <span class="prop">(SidenavItem & SidenavCollapsibleList) label:</span>
      <p class="prop-value">string</p>
    </div>
    <div class="prop-container">
      <span class="prop">(SidenavItem & SidenavCollapsibleList) icon:</span>
      <p class="prop-value">IconClassString</p>
    </div>
    <a href="/icons" 
      class="mx-auto link link-secondary mb-4 mt-1 text-center text-xs"
    >
      Check Icons section
    </a>
    <h2 class="title mt-4">Types</h2>
    <div class="flex flex-col gap-2">
      <CodeCard title="SidenavConfig" content={sidenavConfig} />
      <CodeCard title="SidenavWidth" content={sidenavWidth} />
    </div>
    <a href="https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale" 
      class="mx-auto link link-secondary mb-4 mt-1 text-center text-xs"
    >
      Check Tailwind's default spacing scale
    </a>
  </svelte:fragment>
</Layout>