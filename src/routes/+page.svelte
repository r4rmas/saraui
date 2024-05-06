<script lang="ts">
  import type { NotificationCauseString, SelectorOption } from "$lib/types.js"
  import { showNotification, sleep, useModal } from "$lib/utils.js"
  import { daisyButton, saraButton, tailwindConfig, layoutFile } from "./DisplayableCode.js"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import RadioSelector from "$lib/components/RadioSelector.svelte"
  import ConfirmationModal from "$lib/components/ConfirmationModal.svelte"
  import CodeCard from "../lib/components/private/CodeCard.svelte"
  import Button from "$lib/components/Button.svelte"
  import Dropdown from "$lib/components/Dropdown.svelte"

  const notificationCauses: SelectorOption[] = [
    { label: "success", value: "success", isSelected: true }, 
    { label: "info", value: "info" }, 
    { label: "warning", value: "warning" }, 
    { label: "error", value: "error" }
  ]

  const lightThemes: SelectorOption[] = [
    { label: "Bumblebee", value: "bumblebee" }, 
    { label: "Corporate", value: "corporate" }, 
    { label: "Emerald", value: "emerald" }, 
    { label: "Lemonade", value: "lemonade" }, 
    { label: "Retro", value: "retro" }, 
    { label: "Valentine", value: "valentine" }, 
  ]
  const darkThemes: SelectorOption[] = [
    { label: "Dracula", value: "dracula" }, 
    { label: "Dim", value: "dim" }, 
    { label: "Forest", value: "forest" }, 
    { label: "Night", value: "night" }, 
    { label: "Sunset", value: "sunset" }, 
    { label: "Synthwave", value: "synthwave" }, 
  ]

  const { ref, show } = useModal()

  let selectedRadio: NotificationCauseString = "success"
  let selectedTheme: string | undefined = undefined

  $: selectedTheme ? updateTheme(selectedTheme) : undefined

  function updateTheme(selectedTheme: string) {
    document
      .querySelector(":root")
      ?.setAttribute("data-theme", selectedTheme)
  }
</script>

<div></div>
<p class="bg-gradient-to-br from-accent via-primary to-secondary bg-clip-text text-center">
  <span class="text-lg">🤖</span>
  <span>Enhanced</span>
  <span class="font-medium text-transparent">daisyUI</span>
  <span>components for</span>
  <span class="svelte">Svelte</span>/<span class="svelte">Svelte</span>Kit
</p>

<div class="hidden md:block"></div>
<ImageUploader />
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  <RadioSelector name="notification" 
    options={notificationCauses} 
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

<div></div>
<div class="mt-2 text-start w-full">
  <div class="logo-gradient">
    <h2 class="title text-transparent">
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

<div class="
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] xl:grid-cols-2 2xl:grid-cols-[1fr_2fr]
  gap-2 md:gap-4
  w-full
">
  <CodeCard title="daiysUI" content={daisyButton} />
  <div class="grid grid-cols-1 xl:grid-rows-1 2xl:grid-rows-2 gap-2">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-2 md:gap-4">
      <div class="flex flex-col w-full md:h-full lg:h-fit xl:h-full 2xl:h-fit">
        <div class="code-card-title flex justify-center items-center">
          Sara UI 
          <img src="https://cdn.icon-icons.com/icons2/1465/PNG/32/199princess2_100395.png" 
            alt="logo"
            class="w-6 h-6 ml-2"
          /> 
        </div>
        <div class="code-card-body w-full text-sm
            md:h-full lg:h-fit xl:h-full 2xl:h-fit
        ">
          <pre><code>{saraButton}</code></pre>
        </div>
      </div>
      <div class="code-card w-full">
        <div class="code-card-title">
          Result
        </div>
        <div class="code-card-body flex items-center justify-center w-full">
          <div class="py-2">
            <Button onClick={() => sleep(3)} color="primary">
              Async action
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:flex xl:hidden 2xl:flex w-full h-full items-center px-20 py-2">
      <div class="flex flex-col gap-4 w-full h-fit items-center text-center border border-accent px-4 py-10 rounded-box">
        <p class="font-medium">
          As Sara is made with daisyUI, every componente will get instantly 
          <span class="text-primary">themed</span>!
        </p>
        <div>
          <Dropdown label="☀️ Light themes"
            options={lightThemes} 
            bind:state={selectedTheme}
            name="theme"
          />
          <Dropdown label="🌙 Dark themes"
            options={darkThemes} 
            bind:state={selectedTheme}
            name="theme"
          />
        </div>
        <a href="https://daisyui.com/docs/themes/" class="link text-secondary">
          Learn more about themes
        </a>
      </div>
    </div>
  </div>
</div>

<div class="xl:hidden 2xl:block"></div>
<div class="flex flex-col lg:hidden xl:flex 2xl:hidden gap-4 lg:my-4 w-full items-center text-center border border-accent px-4 py-10 md:py-8 rounded-box">
  <p class="font-medium">
    As Sara is made with daisyUI, every componente will get instantly 
    <span class="text-primary">themed</span>!
  </p>
  <div>
    <Dropdown label="☀️ Light themes"
      options={lightThemes} 
      bind:state={selectedTheme}
      name="theme"
    />
    <Dropdown label="🌙 Dark themes"
      options={darkThemes} 
      bind:state={selectedTheme}
      name="theme"
    />
  </div>
  <a href="https://daisyui.com/docs/themes/" class="link text-secondary">
    Learn more about themes
  </a>
</div>

<div class="lg:hidden"></div>
<div class="flex flex-col w-full">
  <h2 id="installation" class="title">
    Installation ☝️<span class="text-2xl">🤓</span>
  </h2>
  <ol>
    <li>1. Install & set up tailwindcss</li>
    <li>2. Install daisyUI</li>
    <li>3. Install Sara</li>
    <li>4. Update the tailwind's config file</li>
  </ol>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 w-full gap-4 2xl:gap-8">
  <div class="mockup-code text-sm">
    <pre data-prefix="1." class="text-accent"><code>npx @svelte-add/tailwindcss@latest</code></pre>
    <pre data-prefix="2." class="text-secondary"><code>npm i -D daisyui</code></pre>
    <pre data-prefix="3." class="text-primary"><code>npm i saraui</code></pre>
  </div>
  <div class="flex w-full">
    <CodeCard title="4. tailwind.config.cjs" 
      content={tailwindConfig} 
    />
  </div> 
</div>

<div class="flex flex-col w-full">
  <h2 class="title">First step</h2>
  <p>Set up the SaraProvider at the root of your application:</p>
</div>
<div class="flex w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-8 w-full">
      <CodeCard title="src/routes/+layout.svelte"
        content={layoutFile}
      />
      <div class="flex w-full border border-info rounded-box">
        <div class="flex flex-col items-center justify-center px-4 py-8 gap-4">
          <p>You can configure Sara by providing a valid config value to its provider.</p>
          <a href="/provider" class="link text-secondary">
            Check SaraProvider
          </a>
        </div>
      </div>
    </div>
</div>

<div class="hidden lg:block"></div>
<div class="flex w-full">
  <a href="/components" class="link text-secondary">
    Check all the provided components
  </a>
</div>
<div></div>

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