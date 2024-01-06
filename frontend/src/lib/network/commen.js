import {PUBLIC_NODE_BACKEND_URL} from '$env/static/public';

/**
 * @param {string} url
 * @param {object} options
 * @return {Promise<Response>}
 * @throws {Error}
 * */
export async function fetch_from_backend(url, options) {
    debugger;
    url = PUBLIC_NODE_BACKEND_URL + url;
    const response = await fetch(url, options);
    return response;
}

