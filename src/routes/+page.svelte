<script lang="ts">
  import type { NotificationCauseString, SelectorOption } from "$lib/types.js"
  import { showNotification } from "$lib/utils.js"
  import { sleep } from "$lib/private/utils.js"
  import { daisyButton, saraButton, tailwindConfig, layoutFile } from "./displayableCodes.js"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import RadioSelector from "$lib/components/RadioSelector.svelte"
  import ConfirmationModal from "$lib/components/ConfirmationModal.svelte"
  import CodeCard from "./lib/CodeCard.svelte"
  import Button from "$lib/components/Button.svelte"
  import ThemeCard from "./ThemeCard.svelte"
  import IconButton from "$lib/components/IconButton.svelte"
  import Dropdown from "$lib/components/Dropdown.svelte"

  const notificationCauses: SelectorOption[] = [
    { label: "success", value: "success" }, 
    { label: "info", value: "info" }, 
    { label: "warning", value: "warning" }, 
    { label: "error", value: "error" }
  ]

  let selectedRadio: NotificationCauseString = "success"
  let isModalOpen = false
</script>

<div></div>
<p class="bg-gradient-to-br from-accent via-primary to-secondary bg-clip-text text-center">
  <span class="text-lg">🤖</span>
  <span>Enhanced</span>
  <span class="font-medium text-transparent">daisyUI</span>
  <span>components for</span>
  <span class="svelte">SvelteKit</span>
</p>

<div class="grid grid-cols-3 md:grid-cols-[1fr_2fr_1fr] md:gap-6 mt-4">
  <a href="/components/scaffold" class="ml-4 md:ml-0 md:mt-2">
    <p class="line-through text-error">Drawer</p>
    <p class="font-semibold">Scaffold</p>
  </a>
  <div class="flex justify-center">
    <ImageUploader />
  </div>
  <div class="ml-8 md:ml-0 md:mt-2"> 
    <Dropdown position={{
      sm: "bottom-end",
      md: "right-end"
    }}>
      <div class="m-1">
        <IconButton tooltip="Dropdown" color="primary" modifier="outline">
          <span class="i-mdi-help"></span>
        </IconButton>
      </div>
      <div slot="content" 
        class="bg-base-200 p-4 shadow-md rounded-box w-fit text-sm"
      >
        This is a Dropdown.
      </div>
    </Dropdown>
  </div>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  <RadioSelector name="notification" 
    options={notificationCauses} 
    bind:state={selectedRadio} 
  />
</div>
<div class="flex gap-2">
  <Button color="secondary"
    onClick={() => showNotification(selectedRadio, "Hello, world! 👋🏼", selectedRadio)}>
    Show notification
  </Button>
  <Button onClick={() => isModalOpen = true} color="accent">
    Show modal
  </Button>
</div>

<div></div>
<div class="mt-2 text-start w-full">
  <div class="logo-gradient-text">
    <h2 class="title text-transparent">
      Get Sarisfied!
    </h2>
  </div>
  <p>
    <span class="text-primary font-medium">Sara UI</span>'s 
    mission is to provide new advanced components that only would be possible thanks to 
    <span class="text-accent font-medium">javascript</span> 
    capabilities. It's not intended to replace 
    <span class="text-secondary link font-medium"><a href="https://daisyui.com">daisyUI</a></span> 
    but to complement it.
  </p>
</div>

<div class="
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] xl:grid-cols-2 2xl:grid-cols-[1fr_2fr]
  gap-2 md:gap-4 xl:gap-6
  w-full
">
  <CodeCard title="daiysUI" content={daisyButton} />
  <div class="grid grid-cols-1 xl:grid-rows-1 2xl:grid-rows-2 gap-2">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-2 md:gap-4 2xl:gap-6">
      <div class="flex flex-col w-full md:h-full lg:h-fit xl:h-full 2xl:h-fit">
        <div class="code-card-title flex justify-center items-center">
          Sara UI 
          <img src="https://cdn.icon-icons.com/icons2/1465/PNG/64/199princess2_100395.png" 
            alt="logo"
            class="w-5 h-5 ml-2 mb-0.5"
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
    <div class="
      hidden lg:flex xl:hidden 2xl:flex 
      w-full h-full 
      items-center 
      px-10 py-2
    ">
      <ThemeCard />
    </div>
  </div>
</div>

<div class="xl:hidden 2xl:block"></div>
<div class="lg:hidden xl:block 2xl:hidden">
  <ThemeCard />
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
<div></div>

<ConfirmationModal bind:isOpen={isModalOpen}
  onAccept={() => {}} 
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