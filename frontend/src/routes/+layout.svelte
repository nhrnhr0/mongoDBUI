<script>
import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="container">
  <Navbar />
  <slot />
</div>

<style lang="scss">
:global(:root) {
  --primary-color: #6200ee;
  --primary-color-vairant: #3700b3;
  --secondary-color: #03dac6;
  --secondary-color-variant: #018786;
  --background-color: #ffffff;
  --surface-color: #ffffff;
  --error-color: #b00020;
  --on-primary-color: #ffffff;
  --on-secondary-color: #000000;
  --on-background-color: #000000;
  --on-surface-color: #000000;
  --on-error-color: #ffffff;
}
</style>
