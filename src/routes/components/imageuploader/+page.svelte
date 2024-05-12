<script lang="ts">
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import CodeCard from "../../lib/CodeCard.svelte"
  import { withPlaceholder } from "./displayableCodes.js"
  import { onMount } from "svelte"

  let profilePicture: File

  onMount(() => {
    fetch("https://cdn.icon-icons.com/icons2/1465/PNG/128/199princess2_100395.png")
    .then(res => res.blob())
    .then(b => profilePicture = new File([b], "picture.png", { type: b.type }))
  })
</script>

<h2 class="title mt-4">ImageUploader</h2>
<p class="mb-4">Allows to upload and represent images:</p>
<div class="flex gap-4 flex-wrap justify-center md:justify-start">
  <ImageUploader color="neutral" rounded="none" />
  <ImageUploader color="primary" rounded="xl" />
  <ImageUploader color="secondary" rounded="3xl" />
  <ImageUploader color="accent" />
</div>
<h2 class="title mt-8">Example</h2>
<div class="w-full md:w-fit">
  <CodeCard title="Example.svelte" content={withPlaceholder} />
</div>