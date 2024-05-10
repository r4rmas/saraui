<script lang="ts">
  import CodeCard from "../lib/CodeCard.svelte"
  import { loaderProps, notificationBreakpointDirection, notificationBreakpointDistance, notificationConfig, notificationIcons, notificationTransition, providerConfig } from "./displayableCode.js"
</script>

<div class="flex w-full container">
  <div class="flex flex-col gap-4 xl:flex-row w-full overflow-hidden">
    <slot></slot>
    <div class="flex flex-col xl:border-l xl:border-l-base-200 xl:px-4 gap-2 overflow-y-auto">
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
        class="mx-auto link link-primary mb-4"
      >
        Check Tailwind's default spacing scale
      </a>
    </div>
  </div>
</div>

<style>
  .container {
    @media (width >= 1280px) {
      height: calc(100vh - 5rem);
    }
  }
</style>