<div class="flex w-full container">
  <div class="grid grid-cols-1 xl:grid-cols-[3fr_1fr]">
    <div class="flex flex-col w-full overflow-y-auto pr-4">
      <slot></slot>
    </div>
    <div class="flex flex-col xl:border-l xl:border-l-base-200 xl:px-4 gap-2 overflow-y-auto mb-4">
      <slot name="types"></slot>
    </div>
  </div>
</div>

<style>
  .container {
    @media (width >= 1280px) {
      height: calc(100vh - 5rem);
    }
  }
</style>