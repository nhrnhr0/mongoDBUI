
import { fetch_from_backend } from "./commen";
import {userStore} from '../stores/userStore.js';
import {get} from 'svelte/store';
// handle network requests related to authentication
export default class AuthController {


    // register
    /**
    * @param {string} username
    * @param {string} password
    * @param {string} email
    * @return {Promise<Response>}
    * */
    static async register(username, password, email) {
        const response = await fetch_from_backend("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password,email }),
        });
        if (response.ok) {
            let _user = await response.json();
            userStore.set(_user);
            return _user;
        }
        const error = await response.json();
        throw new Error(error.message);
    }

    // login
    /**
     * @param {string} username
     * @param {string} password
     * @return {Promise<Response>}
     * */

    static async login(username, password) {
        const response = await fetch_from_backend("/api/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            let _user = await response.json();
            userStore.set(_user);
            return _user;
        }
        const error = await response.json();
        throw new Error(error.message);
    }

    // logout
    static logout() {
        userStore.set(null);
    }

    // is logged in
    static is_logged_in() {
        return !!get(userStore);
    }

    // get user
    static get_user() {
        return get(userStore);
    }

    static get_token() {
        return get(userStore)?.accessToken;
    }
}