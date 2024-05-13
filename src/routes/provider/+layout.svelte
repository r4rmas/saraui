<script lang="ts">
  import { loaderProps, notificationBreakpointDirection, notificationBreakpointDistance, notificationConfig, notificationIcons, notificationTransition, providerConfig } from "./displayableCodes.js"
  import CodeCard from "../lib/CodeCard.svelte"
  import Layout from "../lib/Layout.svelte";
</script>

<Layout>
  <slot></slot>
  <svelte:fragment slot="types">
    <h2 class="title mt-4">Props</h2>
    <div class="prop-container">
      <span class="prop">config?:</span>
      <p class="prop-value">SaraProviderConfig</p>
    </div>
    <h2 class="title mt-4">Types</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2">
      <div>
        <CodeCard title="SaraProviderConfig" content={providerConfig} />
      </div>
      <div>
        <CodeCard title="LoaderProps" content={loaderProps} />
      </div>
      <div>
        <CodeCard title="NotificationConfig" content={notificationConfig} />
      </div>
      <div class="flex flex-col">
        <CodeCard title="NotificationIcons" content={notificationIcons} />
        <a href="/icons" 
          class="mx-auto link link-secondary mt-1 mb-4 text-xs"
        >
          Check Icons section
        </a> 
      </div>
      <div>
        <CodeCard title="NotificationTransition" content={notificationTransition} />
      </div>
      <div>
        <CodeCard title="NotificationBreakpointDirection" content={notificationBreakpointDirection} />
      </div>
      <div class="flex flex-col">
        <CodeCard title="NotificationBreakpointDistance" content={notificationBreakpointDistance} />
        <a href="https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale" 
          class="mx-auto link link-secondary mt-1 mb-4 text-center text-xs"
        >
          Check Tailwind's default spacing scale
        </a>
      </div>
    </div>
  </svelte:fragment>
</Layout>

<style lang="postcss">
  div {
    @apply w-full
  }
</style>