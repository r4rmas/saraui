<script lang="ts">
  import { Loaders, Colors} from "$lib/private/enums.js"
  import type { ColorString, LoaderString } from "$lib/types.js"
    import CodeCard from "../../lib/CodeCard.svelte"
  import Layout from "../../lib/Layout.svelte"
    import { confirmationModalIcons } from "./displayableCodes.js"

  const colors = Object.values(Colors)
</script>

<Layout>
  <slot></slot>
  <svelte:fragment slot="types">
    <h2 class="title mt-4">Props</h2>
    <div class="prop-container">
      <span class="prop">ref:</span>
      <p class="prop-value">ModalRef</p>
    </div>
    <p class="text-xs mb-4">
      The only way to get a ModalRef is through useModal utility
    </p>
    <div class="prop-container">
      <span class="prop">(Modal) isClosable?:</span>
      <p class="prop-value">boolean</p>
    </div>
    <div class="prop-container">
      <span class="prop">(Modal) onClose?:</span>
      <p class="prop-value">() => void</p>
    </div>
    <div class="prop-container">
      <span class="prop">(ConfirmationModal) title:</span>
      <p class="prop-value">string</p>
    </div>
    <div class="prop-container">
      <span class="prop">(ConfirmationModal) content:</span>
      <p class="prop-value">string</p>
    </div>
    <div class="prop-container">
      <span class="prop">(ConfirmationModal) onAccept:</span>
      <p class="prop-value">{"(Event) => void | (Event) => Promise<void>"}</p>
    </div>
    <div class="prop-container">
      <span class="prop">(ConfirmationModal) acceptText?:</span>
      <p class="prop-value">string</p>
    </div>
    <div class="prop-container">
      <span class="prop">(ConfirmationModal) cancelText?:</span>
      <p class="prop-value">string</p>
    </div>
    <div class="prop-container">
      <span class="prop">(ConfirmationModal) color?:</span>
      <p class="prop-value">"{colors.join('" | "')}"</p>
    </div>
    <div class="prop-container">
      <span class="prop">(ConfirmationModal) icons?:</span>
      <p class="prop-value">ConfirmationModalIcons</p>
    </div>
    <h2 class="title mt-4">Types</h2>
    <div class="w-full md:w-fit">
      <CodeCard title="ConfirmationModalIcons" content={confirmationModalIcons} />
    </div>
    <a href="/icons"
      class="link link-secondary text-sm text-center mx-auto mt-2 mb-4"
    >
      Check Icons section
    </a>
  </svelte:fragment>
</Layout>