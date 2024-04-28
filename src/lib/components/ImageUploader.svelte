<script lang="ts">
  import { roundedClass, textColor, widthClass, widthClassLG, widthClassMD, widthClassXL } from "$lib/constants.js"
  import type { ColorString, RoundedString, Icon, IconClassString, WidthSpacing, WidthResponsiveSpacing } from "$lib/types.js"
  import { getIconClass, getResponsiveClass } from "$lib/utils.js"
  import Camera from "./private/icons/Camera.svelte"

  export let color: ColorString  = "secondary"
  export let rounded: RoundedString = "full"
  export let acceptedFileExtensions = ".jpeg, .jpg, .png, .heic, .wepb, .avif"
  export let isEditable = true
  export let name: string | undefined = undefined
  export let state: File | undefined = undefined
  export let width: WidthSpacing |  WidthResponsiveSpacing | undefined = undefined
  export let icon: Icon | IconClassString | undefined = undefined
  
  let inputElement: HTMLInputElement
  let files: FileList

  $: [ file ] = files ?? []
  $: if (state) state = file

  function _getResponsiveClass() {
    if (width) {
      if (typeof width !== "string") return getResponsiveClass(width, {
        sm: widthClass,
        md: widthClassMD,
        lg: widthClassLG,
        xl: widthClassXL
      })
      else return widthClass[width]
    }
    return "w-28"
  }
</script>

<input {name}
  bind:files
  bind:this={inputElement}
  id={name}
  disabled={!isEditable}
  accept={acceptedFileExtensions}
  type="file"
  class="hidden"
/>
<div class="relative">
  <div class="avatar">
    <div class="{_getResponsiveClass()} {roundedClass[rounded]}">
      <img src="{file && URL.createObjectURL(file)}" alt={file ? file.name : ""} />
    </div>
  </div>
    <div class={`
      plus-container 
      ${roundedClass[rounded]}
      ${file ? "inset-0" : `
        bg-base-200
        -top-0.5
        -bottom-0.5
        -right-1
        -left-1
      `}
    `}>
      {#if isEditable}
        <button on:click={() => inputElement.click()} 
          class={`
            rounded-full p-1
            ${textColor[color]}
            ${file ? "bg-base-100 bg-opacity-60" : ""}
          `}
        >
          {#if icon}
            <span class={getIconClass(icon, "3xl")}></span>
          {:else}
            <Camera />
          {/if}
        </button>
      {/if}
    </div>
</div>

<style lang="postcss">
  .plus {
    @apply 
    flex
    items-center
    justify-center
    rounded-full 
    bg-base-100 
    text-2xl
    w-8
    h-8
  }
  .plus-container {
    @apply 
    absolute  
    flex 
    justify-center 
    items-center
  }
</style>