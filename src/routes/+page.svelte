<script lang="ts">
  import type { NotificationCauseString, SelectorOption } from "$lib/types.js"
  import Button from "$lib/components/Button.svelte"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import RadioSelector from "$lib/components/RadioSelector.svelte"
  import SidenavButton from "$lib/components/SidenavButton.svelte"
  import { showNotification, useModal } from "$lib/utils.js"
  import ConfirmationModal from "$lib/components/ConfirmationModal.svelte"

  const radioOptions: SelectorOption[] = [{
    label: "success",
    value: "success",
    isSelected: true
  }, {
    label: "info",
    value: "info"
  }, {
    label: "warning",
    value: "warning"
  }, {
    label: "error",
    value: "error"
  }]

  const { ref, show } = useModal()

  let selectedRadio: NotificationCauseString = "success"
</script>

<div class="flex flex-wrap justify-center bg-base-200 p-6 rounded-box">
  <span class="mr-3 text-xl">
    🎨
  </span>
  <div class="bg-gradient-to-br from-accent via-primary to-secondary bg-clip-text">
    <a href="https://daisyui.com">
      <span class="text-transparent font-medium mr-2">
        daisyUI
      </span>
    </a>
  </div>
  <span>components for</span>
  <span class="text-orange-500 ml-2">
    Svelte
  </span>
  <span>/</span>
  <span class="text-orange-500">
    Svelte
  </span>
  <span>Kit</span>
</div>

<ImageUploader />
<div class="flex flex-col items-center gap-4">
  <div class="grid grid-cols-2 gap-4">
    <RadioSelector name="notification" options={radioOptions} bind:state={selectedRadio} />
  </div>
  <div class="flex gap-2">
    <Button onClick={() => showNotification(selectedRadio, {
      title: selectedRadio,
      content: "Hello, world! 👋🏼"
    })}>
      Show notification
    </Button>
    <Button onClick={show} color="secondary">
      Show modal
    </Button>
  </div>
  <div class="flex w-full justify-center mt-4">
    <SidenavButton tooltip="Menu" color="accent" modifier="glass" />
  </div>
</div>

<div>
  <h2 class="text-lg mb-2 font-medium">Get Sarisfied!</h2>
  <p>Sara UI is a new Svelte library built on top of daisyUI.</p>
  <p>Its mission is to provide components that need javascript for their interaction and make them easy to use.</p>
</div>

<div class="mockup-code">
  <pre data-prefix="$"><code>npm i saraui</code></pre>
</div>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos eaque, recusandae asperiores quibusdam quos incidunt sequi reiciendis laboriosam doloribus? Doloremque magni eum placeat laboriosam voluptatum animi, similique hic? Deleniti!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos eaque, recusandae asperiores quibusdam quos incidunt sequi reiciendis laboriosam doloribus? Doloremque magni eum placeat laboriosam voluptatum animi, similique hic? Deleniti!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos eaque, recusandae asperiores quibusdam quos incidunt sequi reiciendis laboriosam doloribus? Doloremque magni eum placeat laboriosam voluptatum animi, similique hic? Deleniti!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos eaque, recusandae asperiores quibusdam quos incidunt sequi reiciendis laboriosam doloribus? Doloremque magni eum placeat laboriosam voluptatum animi, similique hic? Deleniti!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos eaque, recusandae asperiores quibusdam quos incidunt sequi reiciendis laboriosam doloribus? Doloremque magni eum placeat laboriosam voluptatum animi, similique hic? Deleniti!</p>

<ConfirmationModal {ref} onAccept={() => {}} 
  title="This is a Confirmation Modal"  
  content="Quickly build confirmation modals to confirm sensible actions"
/>