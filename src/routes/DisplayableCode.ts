export const daisyButton = `<script>
  let isLoading = false

  async function handleClick() {
    isLoading = true
    await asyncFunction()
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

<Button onClick={asyncFunction}
  color="primary"
>
  Async function
</Button>`

export const tailwindConfig = `const config = {
  content: [
    //👇 add Sara UI
    "./node_modules/saraui/**/*.{html,js,svelte,ts}",
    ...
  ],
  plugins: [
    //👇 add daisyUI
    require("daisyui"),
    ...
  ],
  ...
}`

export const layoutFile = `<script>
  import { SaraProvider } from "saraui"
</script>

<SaraProvider>
  <slot></slot>
</SaraProvider>`