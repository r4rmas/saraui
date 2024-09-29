<script lang="ts">
  import { tableSizeClass } from "$lib/private/constants.js"
  import type { SizeString, TableColsProp, TableRowsProp } from "$lib/types.js"

  export let cols: TableColsProp[]
  export let rows: TableRowsProp[]
  export let size: SizeString = "md"
</script>

<table class="table {tableSizeClass[size]} table-pin-rows table-pin-cols">
  <thead>
    <tr>
      <th></th> 
      {#each cols as { label }}
        <td>{label}</td>
      {/each}
    </tr>
  </thead> 
  <tbody>
    {#each rows as r, i}
      <tr on:click={r.onClick ? () => r.onClick(r) : undefined} class={r.onClick ? "cursor-pointer" : "cursor-default"}> 
        <th>{i + 1}</th>
        {#each cols as { name }}
          <td>{r[name] ?? "-"}</td>
        {/each} 
      </tr>
    {/each}
  </tbody>
</table>