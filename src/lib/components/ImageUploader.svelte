<script lang="ts">
  import { roundedClass, textColor, widthClass, widthClassLG, widthClassMD, widthClassXL } from "$lib/constants.js"
  import type { ColorString, RoundedString, Spacing } from "$lib/types.js"
  import { getResponsiveClass } from "$lib/utils.js"

  export let name: string | undefined = undefined
  export let state: File | undefined = undefined
  export let width: Spacing | undefined = undefined
  export let color: ColorString | undefined = undefined
  export let icon: ConstructorOfATypedSvelteComponent | undefined = undefined
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
          <svelte:component this={icon} />
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" 
            class="w-8 h-8"   
            aria-hidden="true" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path fill-rule="evenodd" 
              clip-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" 
            />
          </svg>
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