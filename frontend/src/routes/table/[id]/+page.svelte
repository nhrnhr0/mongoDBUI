<script>
import { goto } from "$app/navigation";
import TableController from "$lib/controllers/table.controller";
import { onMount } from "svelte";
import { page } from "$app/stores";
const table_id = $page.params.id;
let table;
onMount(async () => {
  table = await TableController.get_table(table_id);
  if (table === undefined) {
    goto("/404");
  }
});
</script>

<h1>Table {table_id}</h1>
{JSON.stringify(table)}
