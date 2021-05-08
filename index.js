const fetch = require ('node-fetch');

class Infinity {
    constructor(id, auth) {
        this.id = id
        this.auth = auth
    }

    async post(servers, shards) {
        let body = shards ? { 'servers': servers, 'shards': shards } : { 'servers': servers, 'shards': 0 }

        await fetch (`https://api.infinitybotlist.com/bot/${this.id}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json', 'authorization': this.auth },
        }).then(async res => {
            response(await res.json())
        })
    }
}

module.exports = Infinity;