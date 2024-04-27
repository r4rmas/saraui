<script lang="ts">
  import { roundedClass, textColor, widthClass, widthClassLG, widthClassMD, widthClassXL } from "$lib/constants.js"
  import type { ColorString, RoundedString, ResponsiveSpacing, Icon } from "$lib/types.js"
  import { getIconClass, getResponsiveClass } from "$lib/utils.js"
  import AddIcon from "./private/icons/Add.svelte"

  export let name: string | undefined = undefined
  export let state: File | undefined = undefined
  export let width: ResponsiveSpacing | undefined = undefined
  export let color: ColorString | undefined = undefined
  export let icon: Icon | string | undefined = undefined
  export let rounded: RoundedString = "full"
  export let acceptedFileExtensions: string = ".jpeg, .jpg, .png, .heic, .wepb, .avif"
  export let isEditable = true
  
  let inputElement: HTMLInputElement
  let files: FileList

  $: [ file ] = files ?? []
  $: if (state) state = file

  function _getResponsiveClass() {
    if (width) return getResponsiveClass(width, {
      sm: widthClass,
      md: widthClassMD,
      lg: widthClassLG,
      xl: widthClassXL
    })
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
      <button on:click={() => inputElement.click()} 
        class={textColor[color ?? "secondary"]}
      >
        {#if icon}
          <span class={getIconClass(icon)}></span>
        {:else}
          <AddIcon />
        {/if}
      </button>
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