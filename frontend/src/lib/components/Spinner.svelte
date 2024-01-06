<!-- spinner -->
<script>
export let size = 70;
export let color = "var(--primary-color)";
</script>

<div class="spinner" style="width: {size}px; height: {size}px; border-color: {color} transparent transparent transparent;"></div>

<style lang="scss">
.spinner {
  display: inline-block;
  border: 4px solid var(--primary-color);
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
