<script lang="ts">
  export let name: string
  export let imageURL: string | null = null
  export let icon: ConstructorOfATypedSvelteComponent | null = null
  export let rounded: "none" | "sm" | "md" | "lg" | "xl"  |"2xl" | "3xl" | "full"  = "full"
  export let acceptedFileExtensions: string = ".jpeg, .jpg, .png, .heic, .wepb, .avif"

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

  let inputElement: HTMLInputElement

  $: isImaged = imageURL !== null

  function onChange(e: Event) {
    const { files } = <HTMLInputElement>e.currentTarget
    if (files) {
      const file = files[0]
      imageURL = URL.createObjectURL(file)
    }
  }
  function onClick() {
    inputElement.click()
  }
</script>

<input {name}
  bind:this={inputElement}
  on:change={onChange}
  id={name}
  type="file"
  accept={acceptedFileExtensions}
  class="hidden"
/>
<div 
  class={`
    relative 
    w-28 h-28
    border
    border-base-300
    ${roundedStyle[rounded]}
    ${isImaged
      ? "imaged"
      : "bg-base-200"
  }`}
  style={isImaged
    ? `--img: url(${imageURL});`
    : ""
}>
  <div class="
    flex
    absolute
    inset-0
    justify-center
    items-center
  ">
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
          items-center justify-center
        ">
          +
        </div>
      {/if}
    </button>
  </div>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .imaged {
    background-image: var(--img);
    @apply
      bg-cover
      bg-center
      bg-no-repeat
    ;
  }
</style>