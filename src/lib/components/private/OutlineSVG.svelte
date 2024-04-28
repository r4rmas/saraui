<script lang="ts">
  export let d: string
  export let width = 24
  export let height = 24
</script>

<svg {width} {height}
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"  
  fill="none" 
  viewBox="0 0 24 24"
>
  <path {d}
    stroke="currentColor" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    stroke-width="2" 
  />
</svg>