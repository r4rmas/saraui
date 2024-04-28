<script lang="ts">
  import { roundedClass, textColor, widthClass, widthClassLG, widthClassMD, widthClassXL } from "$lib/constants.js"
  import type { ColorString, RoundedString, Icon, IconClassString, WidthSpacing, WidthResponsiveSpacing } from "$lib/types.js"
  import { getIconClass, getResponsiveClass } from "$lib/utils.js"

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
    <div class="
      btn-container 
      {roundedClass[rounded]}
      {file ? "inset-0" : "backgrounded"}
    ">
      {#if isEditable}
        <button on:click={() => inputElement.click()} 
          class="
            rounded-full p-1
            {textColor[color]}
            {file ? "bg-base-100 bg-opacity-60" : ""}
          "
        >
          {#if icon}
            <span class={getIconClass(icon, "3xl")}></span>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true" 
              width="34" height="34" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M7.5 4.586A2 2 0 0 1 8.914 4h6.172a2 2 0 0 1 1.414.586L17.914 6H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.086L7.5 4.586ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" 
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          {/if}
        </button>
      {/if}
    </div>
</div>

<style lang="postcss">
  .btn-container {
    @apply 
    absolute  
    flex 
    justify-center 
    items-center
  }
  .backgrounded {
    @apply
    bg-base-200 
    -top-0.5 
    -bottom-0.5 
    -right-1 
    -left-1
  }
</style>