export const pathname = `<script>
  import { currentBreakpoint } from "saraui"

  $: console.log($currentBreakpoint)
</script>`

export const sidenav = `<script>
  import { sidenav, Scaffold, Button } from "saraui"
</script>

<Scaffold>
  <header slot="header">
    ...
  </header>

  <Button onClick={() => $sidenav?.toggle()}>
    Toggle sidenav
  </Button>

  <nav slot="sidenav">
    ...
  </nav>
</Scaffold>`