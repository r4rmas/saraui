export const withPlaceholder = `<script lang="ts">
  import { ImageUploader } from "saraui"

  let state: File | undefined = undefined 
  //or you can init the state and you'll have an image placeholder
</script>

<ImageUploader name="profilePicture" bind:state />`