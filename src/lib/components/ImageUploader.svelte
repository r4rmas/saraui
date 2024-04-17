<script lang="ts">
  export let name: string
  export let imageURL: string | null = null
  export let icon: ConstructorOfATypedSvelteComponent
  export let acceptedFileExtensions: string = ".jpeg, .jpg, .png, .heic, .wepb, .avif"

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
  id={name}
  bind:this={inputElement}
  on:change={onChange}
  type="file"
  accept={acceptedFileExtensions}
  class="hidden"
/>
<div 
  class={`
    relative 
    w-28 h-28
    rounded-full
    border
    border-base-300
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
      <svelte:component this={icon} />
    </button>
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