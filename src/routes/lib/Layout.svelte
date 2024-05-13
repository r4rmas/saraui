<div class="flex w-full container">
  <div class="flex flex-col xl:flex-row w-full">
    <div class="flex flex-col w-full xl:overflow-y-auto xl:pr-4">
      <slot></slot>
    </div>
    <div class="flex flex-col xl:border-l w-full xl:border-l-base-200 xl:px-4 overflow-y-auto mb-4">
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