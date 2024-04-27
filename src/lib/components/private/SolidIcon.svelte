<script lang="ts">
  export let d: string
  export let width: number | undefined = 32
  export let height: number | undefined = 32
</script>

<svg {width} {height}
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  fill="currentColor" 
  viewBox="0 0 24 24"
>
  <path fill-rule="evenodd" 
    clip-rule="evenodd"
    {d}
  />
</svg>
