<script lang="ts">
  import CodeCard from "../lib/CodeCard.svelte"
  import { modal, notification } from "./displayableCodes.js"
</script>

<div class="flex flex-col w-full">
  <h2 class="title mt-4">showNotification</h2>
  <p>Allow to show a notification.</p>
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

  <h2 class="title mt-8">useModal</h2>
  <p>To use any Modal you need a ModalRef, the only way to get it, is through useModal.</p>
  <h2 class="title mt-4">Def:</h2>
  <p>{"() => { ref, open, close }"}</p>
  <div class="w-full md:w-fit my-4">
    <CodeCard title="Example.svelte" content={modal} />
  </div>
</div>