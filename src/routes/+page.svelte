<script lang="ts">
  import type { NotificationCauseString, SelectorOption } from "$lib/types.js"
  import Button from "$lib/components/Button.svelte"
  import { showNotification, sleep, useModal } from "$lib/utils.js"
  import { daisyButton, saraButton } from "./buttonCode.js"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import RadioSelector from "$lib/components/RadioSelector.svelte"
  import SidenavButton from "$lib/components/SidenavButton.svelte"
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
    mission is to provide new
    <span class="text-accent font-medium">enhanced-by-javascript</span>
    <span class="text-secondary link font-medium"><a href="https://daisyui.com">daisyUI</a></span>
    components & make them easy to use, so you can ship faster 🚀.
  </p>
</div>

<div class="grid gap-2 grid-cols-1 lg:grid-cols-3">
  <div class="row">
    <div class="row-title">
      daisyUI
    </div>
    <div class="row-body">
      <pre><code>{daisyButton}</code></pre>
    </div>
  </div>
  <div class="row">
    <div class="row-title flex justify-center items-center">
      Sara UI 
      <img src="https://cdn.icon-icons.com/icons2/1465/PNG/32/199princess2_100395.png" 
        alt="logo"
        class="w-6 h-6 ml-2"
      /> 
    </div>
    <div class="row-body">
      <pre><code>{saraButton}</code></pre>
    </div>
  </div>
  <div class="row">
    <div class="row-title">
      Result
    </div>
    <div class="row-body flex justify-center">
      <div class="py-2">
        <Button onClick={async () => { await sleep(3) }}>
          Async action
        </Button>
      </div>
    </div>
  </div>
</div>

<div></div>
<div class="flex w-full tex-start">
  <p>
    As Sara UI is built on top of daisyUI, every componente will get instantly themed!
  </p>
</div>

<div class="flex">
  <div class="dropdown">
    <div tabindex="0" role="button" class="btn m-1">
      <span>☀️</span>
      Light theme
      <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
    </div>
    <ul class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Autumn" value="autumn"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cupcake" value="cupcake"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Emerald" value="emerald"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Garden" value="garden"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Lemonade" value="lemonade"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Winter" value="winter"/></li>
    </ul>
  </div>
  <div class="dropdown">
    <div tabindex="0" role="button" class="btn m-1">
      <span>🌙</span>
      Dark theme
      <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
    </div>
    <ul class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Business" value="business"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dim" value="dim"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dracula" value="dracula"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Forest" value="forest"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Night" value="night"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Sunset" value="sunset"/></li>
    </ul>
  </div>
</div>

<div class="flex w-full">
  <p>To start with Sara UI, first you need to install and configure Tailwindcss:</p>
</div>
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
  .row {
    @apply
    grid-rows-3
  }
  .row-title {
    @apply
    row-span-1
    rounded-t-box
    font-medium
    bg-base-300
    p-2
    text-center
  }
  .row-body {
    @apply
    row-span-2
    bg-base-200
    py-2
    px-6
    rounded-b-box
  }
</style>