<script>
import { goto } from "$app/navigation";
import TableController from "$lib/controllers/table.controller";
import { onMount } from "svelte";
import { createEventDispatcher } from "svelte";

let tables = undefined;
let newTableName = "";

onMount(async () => {
  tables = await TableController.get_all_tables();
});

async function addTable() {
  if (newTableName.trim() !== "") {
    const newTable = await TableController.add_table(newTableName);
    goto(`/table/${newTable.id}`);
  }
}
</script>

<h1>Tables</h1>
{#if tables === undefined}
  <p>No tables found</p>
{:else}
  <ul>
    {#each tables as table}
      <li><a href="/table/{table.id}">{table.name}</a></li>
    {/each}
  </ul>
{/if}

<h2>Add New Table</h2>
<form on:submit|preventDefault={addTable}>
  <input type="text" bind:value={newTableName} placeholder="Table Name" />
  <button type="submit">Add</button>
</form>
