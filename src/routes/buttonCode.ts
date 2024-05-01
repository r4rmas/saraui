export const daisyButton = `<script>
  let isLoading = false

  async function handleClick() {
    isLoading = true
    await someAsyncFunction()
    isLoading = false
  }
</script>

<button on:click={handleClick}
  disabled={isLoading}
  class="
    btn btn-primary 
    {someFixedWidth}
  "
>
  {#if isLoading}
    <span class="
      loading loading-ring
    "/>
  {:else}
    Async action
  {/if}
</button>`

export const saraButton = `<script>
  import { Button } from "saraui"
</script>

<Button onClick={someAsyncFunction}>
  Async function
</Button>`