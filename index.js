const fetch = require ('node-fetch');

class Infinity {

    /** INITIALIZE THE MAIN DISCORD CLIENT AND DOMAIN FOR THE API */
    constructor(id, auth) {
        this.id = id
        this.auth = auth
        this.base_url = 'https://api.infinitybotlist.com/'
    }

    /** POST STATS TO A BOT ON OUR WEBSITE/API */
    async post(servers, shards) {

        let body = shards ? { 'servers': servers, 'shards': shards } : { 'servers': servers, 'shards': 0 }

        await fetch (`${this.base_url}/bot/${this.id}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json', 'authorization': this.auth },
        }).then(async (res) => {console.log(await res.json())})
    }

    /** GET INFO ON A BOT FROM OUR WEBSITE/API */
    async get_bot(botID, response) {

        if (!botID) throw new Error('[IBL-API : 400] Missing Bot ID, Should be a valid String or Snowflake.');

        await fetch(`${this.base_url}/bot/${botID}`, {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
        }).then(async resp => {response(await resp.json())})
    }

    /** GET INFO ON A USER FROM OUR WEBSITE/API */
    async get_user(userID, response) {

        if (!userID) throw new Error('[IBL-API : 400] Missing User ID, Should be a valid String or Snowflake')

        await fetch(`${this.base_url}/user/${userID}`, {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
        }).then(async (resp => {response(await res.json())}))
    }
}

module.exports = Infinity;