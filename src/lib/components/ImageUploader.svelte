<script lang="ts">
  import { heightClass, heightClassLG, heightClassMD, heightClassXL, roundedClass, textColor, widthClass, widthClassLG, widthClassMD, widthClassXL } from "$lib/private/constants.js"
  import type { ColorString, RoundedString, SizedIcon, IconClassString, SpacingString, BreakpointSpacing } from "$lib/types.js"
  import { getIconClass, getBreakpointClass } from "$lib/utils.js"

  export let color: ColorString  = "secondary"
  export let rounded: RoundedString = "full"
  export let acceptedFileExtensions = ".jpeg, .jpg, .png, .heic, .wepb, .avif"
  export let isEditable = true
  export let name: string | undefined = undefined
  export let state: File | undefined = undefined
  export let width: SpacingString |  BreakpointSpacing | undefined = undefined
  export let icon: SizedIcon | IconClassString | undefined = undefined
  
  let inputElement: HTMLInputElement
  let files: FileList

  $: [ file ] = files ? files : state ? [ state ] : []
  $: isImaged = file !== undefined

  function _getResponsiveClass() {
    if (width) {
      if (typeof width !== "string") {
        const _widthClass = getBreakpointClass(width, {
          sm: widthClass,
          md: widthClassMD,
          lg: widthClassLG,
          xl: widthClassXL
        })
        const _heightClass = getBreakpointClass(width, {
          sm: heightClass,
          md: heightClassMD,
          lg: heightClassLG,
          xl: heightClassXL
        })
        return `${_widthClass} ${_heightClass}`
      }
      else return `${widthClass[width]} ${heightClass[width]}`
    }
    return "w-28 h-28"
  }
</script>

<div>
  <input {name}
    bind:files
    bind:this={inputElement}
    id={name}
    disabled={!isEditable}
    accept={acceptedFileExtensions}
    type="file"
    class="hidden"
  />
  <div 
    class="
      relative
      {_getResponsiveClass()}
      {roundedClass[rounded]}
      {isImaged
        ? "imaged"
        : "bg-base-200"
      }
    "
    style={isImaged
      ? `--img: url(${URL.createObjectURL(file)});`
      : ""
  }>
    <div class="
      flex
      absolute
      inset-0
      justify-center
      items-center
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
</div>

<style lang="postcss">
  .imaged {
    background-image: var(--img);
    @apply
    bg-cover
    bg-center
    bg-no-repeat
  }
</style>