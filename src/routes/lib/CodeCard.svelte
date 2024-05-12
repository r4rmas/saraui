<script lang="ts">
  export let title: string
  export let content: string
</script>

<div class="w-full">
  <div class="code-card-title">
    {title}
  </div>
  <div class="code-card-body">
    <pre><code>{content}</code></pre>
  </div>
</div>