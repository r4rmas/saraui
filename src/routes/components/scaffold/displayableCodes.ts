import { BackgroundColors, Breakpoints, Colors } from "$lib/enums.js"

const breakpoints = Object.values(Breakpoints)
const bgColors = Object.values(BackgroundColors)
const colors = Object.values(Colors)

export const scaffold = `<script>
  import { Scaffold } from "saraui"
</script>

<Scaffold>
  <header slot="header" class="py-4 px-2 border-b">
    <!-- header content here  -->
  </header>

  <!-- page content here (slot if it's a layout)  -->

  <div slot="sidenav" class="p-2 border-r">
    <!-- sidenav content here  -->
  </div>
</Scaffold>`

export const sidenavConfig = `{
  startCollapsed?: boolean
  collapsedAt?: "${breakpoints.join('" | "')}"
  color?: "${colors.join('" | "')}" |"${bgColors.join('" | "')}"
  width?: SidenavWidth
}`

export const sidenavWidth = `{
  open?: any posible spacing value from Tailwind's default config,
  collapsed?: any posible spacing value from Tailwind's default config
}`

export const sidenavButton = `<script>
  import { SidenavButton } from "saraui"
</script>

<SidenavButton tooltip="menu" 
  modifier="glass" 
  color="primary" 
/>`

export const sidenavItem =`<script>
  import { Scaffold, SidenavItem } from "saraui"
</script>

<Scaffold>
  ...
  <div slot="sidenav" class="p-2">
    <SidenavItem href="/provider" 
      icon="i-mdi-power-plug-outline" 
      label="Provider" 
    />
  </div>
</Scaffold>`

export const collapsibleList = `<script>
  import { Scaffold, SidenavCollapsibleList, SidenavItem } from "saraui"

  const items = [
    { href="/buttons", label: "Buttons" }
    { href="/modals", label: "Modals" }
    { href="/notification", label: "notification" }
  ]
</script>

<Scaffold>
  ...
  <div slot="sidenav" class="p-2">
    <SidenavCollapsibleList 
      title="Components" 
      icon="i-mdi-package-variant"
    >
      {#each items as { href, label }}
        <SidenavItem {href} {label} />
      {/each}
    </SidenavCollapsibleList>
  </div>
</Scaffold>`
export const collapsibleContainer = `<script>
  import { Scaffold, SidenavCollapsibleContainer } from "saraui"
</script>

<Scaffold>
  ...
  <div slot="sidenav" class="p-2">
    <SidenavCollapsibleContainer>
      <!-- anything here  -->
    </SidenavCollapsibleContainer>
  </div>
</Scaffold>`