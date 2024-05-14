<script lang="ts">
  import Button from "$lib/components/Button.svelte"
  import { Dropdown } from "$lib/index.js"
  import type { SelectorOption } from "$lib/types.js"
  import { updateTheme } from "$lib/utils.js"
  
  const lightThemes: SelectorOption[] = [
    { label: "Bumblebee", value: "bumblebee" }, 
    { label: "Cupcake", value: "cupcake" }, 
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

  let selectedTheme: string | undefined = undefined

  $: selectedTheme ? updateTheme(selectedTheme) : undefined
</script>

<div class="
  flex flex-col gap-4 w-full h-fit items-center text-center 
  px-4 py-10 
  rounded-box
  logo-gradient
">
  <div class="font-medium">
    As Sara is made with daisyUI, every componente will get instantly 
    <p class="text-lg font-semibold m-2 tracking-widest">✨ themed ✨</p>
  </div>
  <div class="flex flex-col md:flex-row gap-2">
    <Dropdown>
      <Button>
        ☀️ Light themes
        <span class="i-mdi-chevron-down text-lg"></span>
      </Button>
      <div slot="content">
        <ul class="menu bg-base-200 rounded-box shadow-md mt-1">
          {#each lightThemes as { label, value }}
            <li>
              <input type="radio"
                on:click={() => selectedTheme = value}
                name="theme" 
                aria-label={label}
                {value}
                class="btn btn-sm btn-block btn-ghost justify-start" 
              >
            </li>
          {/each}
        </ul>
      </div>
    </Dropdown>
    <Dropdown>
      <Button>
        🌙 Dark themes
        <span class="i-mdi-chevron-down text-lg"></span>
      </Button>
      <div slot="content">
        <ul class="menu bg-base-200 rounded-box shadow-md mt-1">
          {#each darkThemes as { label, value }}
            <li>
              <input type="radio"
                on:click={() => selectedTheme = value}
                name="theme" 
                aria-label={label}
                {value}
                class="btn btn-sm btn-block btn-ghost justify-start" 
              >
            </li>
          {/each}
        </ul>
      </div>
    </Dropdown>
  </div>
  <a href="https://daisyui.com/docs/themes/" class="link">
    Learn more about themes
  </a>
</div>