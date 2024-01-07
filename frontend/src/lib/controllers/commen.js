import {PUBLIC_NODE_BACKEND_URL} from '$env/static/public';
import { userStore } from '$lib/stores/userStore';
import { get } from 'svelte/store';
/**
 * @param {string} url
 * @param {object} options
 * @return {Promise<Response>}
 * @throws {Error}
 * */
export async function fetch_from_backend(url, options) {
    url = PUBLIC_NODE_BACKEND_URL + url;
    const user = get(userStore);
    if (user && user.accessToken) {
        options.headers = {
            ...options.headers,
            "x-access-token": user.accessToken,
        };
    }
    const response = await fetch(url, options);
    return response;
}

