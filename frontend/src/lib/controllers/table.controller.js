import { fetch_from_backend } from "./commen.js";

export default class TableController {
    // get all tables
    /**
     * @return {Promise<Response>}
     * */
    static async get_all_tables() {
        const response = await fetch_from_backend("/api/table/all", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            let _tables = await response.json();
            return _tables;
        }
        const error = await response.json();
        throw new Error(error.message);
    }

    // add table
    /**
     * @param {string} name
     * @return {Promise<Response>}
     * */
    static async add_table(name) {
        const response = await fetch_from_backend("/api/table/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
        });
        if (response.ok) {
            let _table = await response.json();
            return _table;
        }
        const error = await response.json();
        throw new Error(error.message);
    }


    // get table
    /**
     * @param {string} id
     * @return {Promise<Response>}
     * */
    static async get_table(id) {
        const response = await fetch_from_backend("/api/table/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            let _table = await response.json();
            return _table;
        }
        const error = await response.json();
        throw new Error(error.message);
    }
}
