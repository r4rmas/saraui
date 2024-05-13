<script lang="ts">
  import CodeCard from "../lib/CodeCard.svelte"
  import { sizedIcon } from "./displayableCodes.js"
</script>

<div class="flex flex-col w-full">
  <h2 class="title mt-4">Icons</h2>
  <p>As Sara is made with daisyUI (a Tailwind plugin) the best option to add icons is obviously another Tailwind plugin.</p>
  <p>Using icons in a "plugin way", allow us to easily paint them with the theme colors.</p>
  <p>To modify any icon of any Sara component you need to use icon classes provided by the <a href="https://github.com/egoist/tailwindcss-icons" class="link link-secondary">@egoist/tailwindcss-icons</a> package.</p>
  <p class="mt-8">
    type <span class="font-semibold">IconClassString</span> = any icon class from <a href="https://github.com/egoist/tailwindcss-icons" class="link link-secondary">@egoist/tailwindcss-icons</a> package
  </p>
  <p class="w-full md:w-fit mt-4">
    <CodeCard title="type SizedIcon" content={sizedIcon} />
  </p>
</div>