<div align="center">
  <img src="https://cdn.icon-icons.com/icons2/1465/PNG/128/199princess2_100395.png" />
  <h3>daisyUI components for Svelte/Sveltekit</h3>
</div>

<h1>Sara UI</h1>
<h2>Configuration</h2>
<p>
  Add Sara UI to 
  <span style="font-style: italic">tailwind.config.cjs</span>:
</p>
<code>  
  const config = {
    content: [
      "./src/**/*.{html,js,svelte,ts}",
      <span style="color: green">
        "./node_modules/saraui/**/*.{html,js,svelte,ts}"
      </span>
    ],
    ...
  }
</code>