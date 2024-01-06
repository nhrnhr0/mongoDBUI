<!-- FILEPATH: /C:/Users/ronio/Desktop/projects/express-svelteKit-auth/frontend/src/lib/components/Navbar.svelte -->
<!-- BEGIN: abpxx6d04wxr -->
<script>
import AuthController from "$lib/network/auth.controller";
import { userStore } from "$lib/stores/userStore";

export let title = "SvelteKit";
export let links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "categories",
    links: [
      {
        name: "category 1",
        href: "/category/1",
      },
      {
        name: "category 2",
        href: "/category/2",
      },
    ],
  },
];
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">{title}</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      {#each links as link}
        {#if link.links}
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {link.name}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              {#each link.links as sublink}
                <a class="dropdown-item" href={sublink.href}>{sublink.name}</a>
              {/each}
            </div>
          </li>
        {:else}
          <li class="nav-item">
            <a class="nav-link" href={link.href}>{link.name}</a>
          </li>
        {/if}
      {/each}
    </ul>
  </div>
  <!-- user auth -->
  {#if $userStore}
    <div class="d-flex">
      <div class="dropdown me-2">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {$userStore.username}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a
              class="dropdown-item"
              href="#"
              on:click={() => {
                AuthController.logout();
                window.location.reload();
              }}>Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  {:else}
    <div class="d-flex">
      <div class="dropdown me-2">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> Enter </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="/login">Login</a>
          </li>
          <li>
            <a class="dropdown-item" href="/register">Register</a>
          </li>
        </ul>
      </div>
    </div>
  {/if}
</nav>
<!-- END: abpxx6d04wxr -->
