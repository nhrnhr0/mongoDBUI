<!-- register page -->
<script>
import { goto } from "$app/navigation";
import Spinner from "$lib/components/Spinner.svelte";
import AuthController from "./../../lib/network/auth.controller.js";
/**@type {string} */
let username;
/**@type {string} */
let password;
/**@type {string} */
let email;
/**@type {string} */
let error;
/**@type {boolean} */
let loading = false;
const SUCSESS_REDIRECT = "/";
function register() {
  AuthController.register(username, password, email)
    .then((res) => {
      goto(SUCSESS_REDIRECT);
    })
    .catch((err) => {
      error = err.message;
    });
}
</script>

<form on:submit|preventDefault={register} method="POST">
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="text" class="form-control" bind:value={username} placeholder="username" name="username" id="username" />
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" bind:value={password} placeholder="password" name="password" id="password" />
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email </label>
    <input type="email" class="form-control" bind:value={email} placeholder="email" name="email" id="email" />
  </div>
  <button type="submit" disabled={loading} class="btn btn-primary">
    {#if loading}
      <Spinner size={8} color="var(--on-primary-color)" />
    {/if}
    Register
  </button>
  {#if error}
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
}
</style>
