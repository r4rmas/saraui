<script lang="ts">
  import type { SelectorOption } from "$lib/types.js"
  import Dropdown from "$lib/components/Dropdown.svelte"
  
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

  let selectedTheme: string | undefined = undefined

  $: selectedTheme ? updateTheme(selectedTheme) : undefined

  function updateTheme(selectedTheme: string) {
    document
      .querySelector(":root")
      ?.setAttribute("data-theme", selectedTheme)
  }
</script>

<div class="
  flex flex-col gap-4 w-full h-fit items-center text-center 
  px-4 py-10 
  rounded-box
  logo-gradient
">
  <div class="font-medium">
    As Sara is made with daisyUI, every componente will get instantly 
    <p class="text-lg font-semibold m-2 tracking-tighter">t h e m e d !</p>
  </div>
  <div class="flex flex-col md:flex-row gap-2">
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
  <a href="https://daisyui.com/docs/themes/" class="link">
    Learn more about themes
  </a>
</div>