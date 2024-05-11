<script lang="ts">
  import { loaderProps, notificationBreakpointDirection, notificationBreakpointDistance, notificationConfig, notificationIcons, notificationTransition, providerConfig } from "./displayableCodes.js"
  import CodeCard from "../lib/CodeCard.svelte"
  import Layout from "../lib/Layout.svelte";
</script>

<Layout>
  <slot></slot>
  <svelte:fragment slot="types">
    <h2 class="title mt-4">Types</h2>
    <div class="w-full">
      <CodeCard title="SaraProviderConfig" content={providerConfig} />
    </div>
    <div class="w-full">
      <CodeCard title="LoaderProps" content={loaderProps} />
    </div>
    <div class="w-full">
      <CodeCard title="NotificationConfig" content={notificationConfig} />
    </div>
    <div class="w-full">
      <CodeCard title="NotificationIcons" content={notificationIcons} />
    </div>
    <a href="https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale" 
      class="mx-auto link link-secondary mb-1"
    >
      Check Icon section
    </a> 
    <div class="w-full">
      <CodeCard title="NotificationTransition" content={notificationTransition} />
    </div>
    <div class="w-full">
      <CodeCard title="NotificationBreakpointDirection" content={notificationBreakpointDirection} />
    </div>
    <div class="w-full">
      <CodeCard title="NotificationBreakpointDistance" content={notificationBreakpointDistance} />
    </div>
    <a href="https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale" 
      class="mx-auto link link-secondary mb-4"
    >
      Check Tailwind's default spacing scale
    </a>
  </svelte:fragment>
</Layout>