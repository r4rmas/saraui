<script lang="ts">
  export let name: string
  export let state: string | undefined = undefined
  export let size: "sm" | "md" | "lg" = "md"
  export let icon: ConstructorOfATypedSvelteComponent | undefined = undefined
  export let onChange: ((image: File) => void) | undefined = undefined
  export let rounded: "none" | "sm" | "md" | "lg" | "xl"  |"2xl" | "3xl" | "full" = "full"
  export let acceptedFileExtensions: string = ".jpeg, .jpg, .png, .heic, .wepb, .avif"
  export let isEditable = true

  const roundedStyle = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  }
  const sizeStyle = {
    sm: "w-[96px] h-[96px]",
    md: "w-[128px] h-[128px]",
    lg: "w-[156px] h-[156px]"
  }

  let inputElement: HTMLInputElement

  $: isImaged = state !== undefined

  function handleChange(e: Event) {
    const { files } = <HTMLInputElement>e.currentTarget
    if (files) {
      const file = files[0]
      state = URL.createObjectURL(file)
      if (onChange) onChange(file)
    }
  }
  function onClick() {
    inputElement.click()
  }
</script>

<input {name}
  bind:this={inputElement}
  on:change={handleChange}
  id={name}
  disabled={!isEditable}
  type="file"
  accept={acceptedFileExtensions}
  class="hidden"
/>
<div 
  class={`
    relative 
    border
    border-base-300
    ${roundedStyle[rounded]}
    ${sizeStyle[size]}
    ${isImaged
      ? "imaged"
      : "bg-base-200"
  }`}
  style={isImaged
    ? `--img: url(${state});`
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
      <button on:click={onClick}
        type="button"  
        class="
          p-1
          rounded-full
          bg-base-200
      ">
          {#if icon}
            <svelte:component this={icon} />
          {:else}
            <div class="
              flex 
              w-5 h-5 
              items-center
              justify-center
              text-xl
            ">
              +
            </div>
          {/if}
      </button>
    {/if}
  </div>
</div>

<style>
  .imaged {
    background-image: var(--img);
    @apply
      bg-cover
      bg-center
      bg-no-repeat
    ;
  }
</style>