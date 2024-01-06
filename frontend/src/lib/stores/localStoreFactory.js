import { writable } from 'svelte/store'
import { browser } from '$app/environment';
// this function generates a local store with the given name
/**
 * @param {string} localStoreName
 * @return {import('svelte/store').Writable<any>}
 * */
export function generageLocalStoreStore(localStoreName) {
    let initialValue = null;
    // we load the value from the local storage if it exists
    const storedValue = browser? window.localStorage.getItem(localStoreName) : null;
    if (storedValue) {
        initialValue = JSON.parse(storedValue);
    }
    const { subscribe, set, update } = writable(initialValue);
    // each time the store is updated, we save the new value to the local storage
    subscribe(value => {
        if (browser) {
            window.localStorage.setItem(localStoreName, JSON.stringify(value));
        }
    });
    return {
        subscribe,
        set,
        update,
    };
}