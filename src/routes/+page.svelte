<script lang="ts">
  import type { NotificationCauseString, SelectorOption } from "$lib/types.js"
  import Button from "$lib/components/Button.svelte"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import RadioSelector from "$lib/components/RadioSelector.svelte"
  import SidenavButton from "$lib/components/SidenavButton.svelte"
  import { showNotification, sleep, useModal } from "$lib/utils.js"
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

<div></div>
<p class="bg-gradient-to-br from-accent via-primary to-secondary bg-clip-text text-center mb-4">
  <span class="text-xl">🎨</span>
  <span>Enhanced</span>
  <span class="font-medium text-transparent">daisyUI</span>
  <span>components for</span>
  <span class="svelte">Svelte</span>/<span class="svelte">Svelte</span>Kit
</p>

<ImageUploader />
<div class="flex flex-col items-center gap-4">
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <RadioSelector name="notification" 
      options={radioOptions} 
      bind:state={selectedRadio} 
    />
  </div>
  <div class="flex gap-2">
    <Button color="secondary"
      onClick={() => showNotification(selectedRadio, {
        title: selectedRadio,
        content: "Hello, world! 👋🏼"
    })}>
      Show notification
    </Button>
    <Button onClick={show} color="accent">
      Show modal
    </Button>
  </div>
  <Button onClick={async () => { await sleep(3) }} isOutlined>
    Async action
  </Button>
  <div class="flex w-full justify-center mt-4">
    <SidenavButton tooltip="Menu" 
      color="secondary" 
      modifier="glass"
      isOutlined 
    />
  </div>
</div>

<div class="mt-2">
  <div class="logo-gradient">
    <h2 class="text-xl mb-4 font-bold text-transparent">
      Get Sarisfied!
    </h2>
  </div>
  <p>
    <span class="text-primary font-medium">Sara UI</span>'s 
    mission is a) to provide new
    <span class="text-accent font-medium">enhanced-by-javascript</span>
    <span class="text-secondary link font-medium"><a href="https://daisyui.com">daisyUI</a></span>
    components and b) improve the development experience, by making them easy to use 🚀.
  </p>
</div>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus. Eius facere reprehenderit, consequuntur dolorem laboriosam adipisci nihil, veniam amet saepe vitae molestiae libero suscipit mollitia maxime cum. Eligendi, laborum?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus. Eius facere reprehenderit, consequuntur dolorem laboriosam adipisci nihil, veniam amet saepe vitae molestiae libero suscipit mollitia maxime cum. Eligendi, laborum?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus. Eius facere reprehenderit, consequuntur dolorem laboriosam adipisci nihil, veniam amet saepe vitae molestiae libero suscipit mollitia maxime cum. Eligendi, laborum?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus. Eius facere reprehenderit, consequuntur dolorem laboriosam adipisci nihil, veniam amet saepe vitae molestiae libero suscipit mollitia maxime cum. Eligendi, laborum?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, accusamus. Eius facere reprehenderit, consequuntur dolorem laboriosam adipisci nihil, veniam amet saepe vitae molestiae libero suscipit mollitia maxime cum. Eligendi, laborum?</p>

<div class="mockup-code">
  <pre data-prefix="$"><code>npm i saraui</code></pre>
</div>

<ConfirmationModal {ref} onAccept={() => {}} 
  title="This is a Confirmation Modal"  
  content="Quickly build confirmation modals to confirm sensible actions"
/>

<style lang="postcss">
  .svelte {
    @apply 
    font-medium
    text-orange-400
  }
</style>