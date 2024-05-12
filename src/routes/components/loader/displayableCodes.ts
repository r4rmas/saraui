export const loader = `<script>
  import { Loader } from "saraui"

  const color = "primary"
  const option = "ball"
</script>

//can be sized through text
<span class="text-xl">
  <Loader {color} {option} />
</span`