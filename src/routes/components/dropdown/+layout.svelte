<script lang="ts">
  import { DropdownPositions } from "$lib/enums.js"
  import type { DropdownPositionString } from "$lib/types.js"
  import { dropdownBreakpointPosition } from "./displayableCodes.js"
  import CodeCard from "../../lib/CodeCard.svelte"
  import Layout from "../../lib/Layout.svelte";

  const positions: DropdownPositionString[] = Object.values(DropdownPositions)
</script>

<Layout>
  <slot></slot>
  <svelte:fragment slot="types">
    <h2 class="title mt-4">
      Props
    </h2>
    <div class="prop-container">
      <span class="prop">position?:</span>
      <p class="prop-value">
        DropdownBreakpointPosition | "{positions.join('" | "')}"
      </p>
    </div>
    <div class="prop-container">
      <span class="prop">isClosable?:</span>
      <p class="prop-value">boolean</p>
    </div>
    <div class="prop-container">
      <span class="prop">openOnHover?:</span>
      <p class="prop-value">boolean</p>
    </div>
    <h2 class="title mt-4">
      Types
    </h2>
    <CodeCard title="DropdownBreakpointPosition" 
      content={dropdownBreakpointPosition} 
    />
  </svelte:fragment>
</Layout>