import {generageLocalStoreStore} from './localStoreFactory.js';
import {get} from 'svelte/store';
export const userStore = generageLocalStoreStore("user")
