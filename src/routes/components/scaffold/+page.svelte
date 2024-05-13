<script lang="ts">
  import SidenavButton from "$lib/components/SidenavButton.svelte"
  import CodeCard from "../../lib/CodeCard.svelte"
  import { collapsibleContainer, collapsibleList, scaffold, sidenavButton, sidenavItem } from "./displayableCodes.js"
</script>

<h2 class="title mt-4">Scaffold</h2>
<p>Add a layout that includes a sidenav and a header.</p>
<p class="mb-4">
  The sidenav is equivalent to 
  <a href="https://daisyui.com/components/drawer" class="link link-secondary">daisyUI's drawer</a> 
  but the Sara's version can be collapsible if the sidenavConfig prop gets an width.collapased value through its props.
</p>
<h2 class="title mt-4">Example</h2>
<CodeCard title="src/routes/+layout.svelte" content={scaffold} />
<h2 class="title mt-8">SidenavButton</h2>
<p class="mb-4">Allows to toggle the sidenav.</p>
<SidenavButton tooltip="menu" color="primary" modifier="glass" size="md" />
<p class="my-4">By default it'll have a ghost style, you can paint it with modifier="glass" and a color value.</p>
<p>
  If you want to recreate your own button or need to dinamically open/close the sidenav, you can use the 
  <a href="/stores#sidenav" class="link link-secondary">sidenav store</a>.
</p>
<h2 class="title mt-4">Example</h2>
<CodeCard title="Example.svelte" content={sidenavButton} />
<h2 class="title mt-8">SidenavItem</h2>
<p>Allows to represent an item in the sidenav.</p>
<p>If the sidenav is collapsed it'll show only the given icon through its props.</p>
<h2 class="title mt-4">Example</h2>
<CodeCard title="Example.svelte" content={sidenavItem} />
<h2 class="title mt-8">SidenavCollapsibleList</h2>
<p>Allows to represent a collapsible list of sidenav items.</p>
<h2 class="title mt-4">Example</h2>
<CodeCard title="Example.svelte" content={collapsibleList} />
<h2 class="title mt-8">SidenavCollapsibleContainer</h2>
<p>
  A container that adds the sidenav's collapsed transition to its children. Useful when the sidenav is collapsible and you need to add something different to an SidenavItem.
</p>
<h2 class="title mt-4">Example</h2>
<div class="mb-4">
  <CodeCard title="Example.svelte" content={collapsibleContainer} />
</div>