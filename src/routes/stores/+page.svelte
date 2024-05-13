<script lang="ts">
  import CodeCard from "../lib/CodeCard.svelte"
  import { pathname, sidenav } from "./displayableCodes.js"
</script>

<div class="flex flex-col w-full">
  <h2 class="title mt-4">$currentPathname</h2>
  <p>Returns the current pathname.</p>
  <h2 class="title mt-4">Type</h2>
  <p>{"Writable<string> | undefined"}</p>
  <h2 class="title mt-4">Example</h2>
  <div class="w-full md:w-fit">
    <CodeCard title="Example.svelte" content={pathname} />
  </div>
  <h2 id="sidenav" class="title mt-8">$sidenav</h2>
  <p>Allows to manipulate the sidenav.</p>
  <h2 class="title mt-4">Type</h2>
  <p>
    Writable{"<{"} 
    <span class="font-medium">isOpen</span>: boolean, 
    <span class="font-medium">isCollapsible</span>: boolean, 
    <span class="font-medium">toggle</span>: () => void {"}>"}
    | undefined
  </p>
  <h2 class="title mt-4">Example</h2>
  <div class="w-full md:w-fit mb-4">
    <CodeCard title="Example.svelte" content={sidenav} />
  </div>
</div>