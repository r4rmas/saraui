<script lang="ts">
  import { Colors, Sizes } from "$lib/private/enums.js"
  import Layout from "../../lib/Layout.svelte"

  const colors = Object.values(Colors)
  const sizes = Object.values(Sizes)
</script>

<Layout>
  <slot></slot>
  <svelte:fragment slot="types">
    <h2 class="title mt-4">Props</h2>
    <div class="prop-container">
      <span class="prop">options:</span>
      <p class="prop-value">SelectorOption[]</p>
    </div>
    <div class="prop-container">
      <span class="prop">isRequired?:</span>
      <p class="prop-value">boolean</p>
    </div>
    <div class="prop-container">
      <span class="prop">isDisabled?:</span>
      <p class="prop-value">boolean</p>
    </div>
    <div class="prop-container">
      <span class="prop">state?:</span>
      <p class="prop-value">string</p>
    </div>
    <div class="prop-container">
      <span class="prop">size?:</span>
      <p class="prop-value">"{sizes.join('" | "')}"</p>
    </div>
    <div class="prop-container">
      <span class="prop">color?:</span>
      <p class="prop-value">"{colors.join('" | "')}"</p>
    </div>
    <div class="prop-container">
      <span class="prop">(RadioSelector & InputSelector) name:</span>
      <p class="prop-value">string</p>
    </div>
    <p class="text-xs mb-4">
      name is used to identify the value in a FormData, in case of CheckboxSelector you'll have to validate every checkbox in the backend or send the selected values gotten through bind:state
    </p>
    <div class="prop-container">
      <span class="prop">(CheckboxSelector) min?:</span>
      <p class="prop-value">number</p>
    </div>
    <div class="prop-container">
      <span class="prop">(CheckboxSelector) max?:</span>
      <p class="prop-value">number</p>
    </div>
  </svelte:fragment>
</Layout>