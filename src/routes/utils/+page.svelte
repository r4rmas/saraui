<script lang="ts">
  import CodeCard from "../lib/CodeCard.svelte"
  import { notification, theme } from "./displayableCodes.js"
</script>

<div class="flex flex-col w-full">
  <h2 id="showNotification" class="title mt-4">showNotification</h2>
  <p>Allows to show a notification.</p>
  <h2 class="title mt-4">Def:</h2>
  <p>
    (<span class="font-medium">cause</span>: 
    "success" | "info" | "warning" | "error", 
    <span class="font-medium">content</span>: 
    string, 
    <span class="font-medium">title?</span> 
    string) => void
  </p>
  <h2 class="title mt-4">Example</h2>
  <div class="w-full md:w-fit">
    <CodeCard title="Example.svelte" content={notification} />
  </div>
  <h2 id="showNotification" class="title mt-8">updateTheme</h2>
  <p>Allows to update the theme.
  <p>It'll be automatically saved in the localStorage and loaded everytime SaraProvider is mounted.</p>
  <p>You can only select the themes that you added previously in the Tailwind's config file.</p>
  <a href="https://daisyui.com/docs/themes/" class="link link-secondary mt-1">
    Learn more about themes
  </a>
  <h2 class="title mt-4">Def:</h2>
  <p>
    (string) => void
  </p>
  <h2 class="title mt-4">Example</h2>
  <div class="w-full md:w-fit mb-4">
    <CodeCard title="Example.svelte" content={theme} />
  </div>
</div>