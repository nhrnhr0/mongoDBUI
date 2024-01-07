<!-- login page -->
<script>
import { goto } from "$app/navigation";
import Spinner from "$lib/components/Spinner.svelte";
import AuthController from "../../lib/controllers/auth.controller.js";
/**@type {string} */
let username;
/**@type {string} */
let password;
/**@type {string} */
let error;
/**@type {boolean}*/
let loading = false;
function login() {
  loading = true;
  AuthController.login(username, password)
    .then(() => {
      // get the redirect url from the query params or default to '/'
      let redirect = "/";
      const params = new URLSearchParams(location.search);
      if (params.has("redirect")) {
        redirect = params.get("redirect") || "/";
      }
      goto(redirect);
    })
    .catch((err) => {
      error = err.message;
    })
    .finally(() => {
      loading = false;
    });
}
</script>

<form on:submit|preventDefault={login} method="POST">
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="text" bind:value={username} placeholder="username" required name="username" id="username" class="form-control" />
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" bind:value={password} placeholder="password" required name="password" id="password" class="form-control" />
  </div>
  <button type="submit" disabled={loading} class="btn btn-primary">
    {#if loading}
      <Spinner size={8} color="var(--on-primary-color)" />
    {/if}
    Login
  </button>

  {#if error && !loading}
    <p style="color: red">{error}</p>
  {/if}
</form>

<style lang="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  & input {
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--primary-color);
    outline: none;
  }

  & button {
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--primary-color);
    outline: none;
    background-color: var(--primary-color);
    color: var(--on-primary-color);
    cursor: pointer;
  }

  & button:hover {
    background-color: var(--primary-color-vairant);
  }

  & button:active {
    background-color: var(--primary-color);
  }

  & p {
    margin: 0.5rem;
  }

  & p:hover {
    cursor: pointer;
  }

  & p:active {
    color: var(--primary-color-vairant);
  }

  & p:visited {
    color: var(--primary-color-vairant);
  }
}
</style>
