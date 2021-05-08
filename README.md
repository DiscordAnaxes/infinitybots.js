# Infinity Bot List API Wrapper
The official NPM Module for interacting with the Infinity Bots API

---

## Installation
`npm i infinityapi.js@latest`

or

`npm i infinityapi.js@1.0.0`

or

`npm i infinityapi.js --save`

---

## Hard Coded Install
Append the Line below to your package.json
```
    "infinityapi.js": "^1.0.0",
```

• Save and profit

---

## Ratelimits
You can POST Server and Shard Count stats 3 Times every 5 minutes

---

## Response

> [ Error ] 429 : `(429): Your are being ratelimited, 1 request per 5 mins.`

> [ Error ] 404 : `(404): Can't find server_count.`

> [ Error ] 404 : `(404): Authorization header not found.`

> [ Error ] 400 : `(400): server_count not integer.`

> [ Error ] 404 : `(404): Bot not found!`

> [ Error ] 400 : `(400): Incorrect authorization token.`

> [ Error ] 404 : `(404): Go generate auth token for your bot!`

> [ Error ] 400 : `(400): shard_count not integer.`


> [ Success ] 200 : **[200]: Your Stats Have Been Posted.**

---


## Posting Stats

### Constructor

```
Infinity(client, token)
```

###### Arguments
Parameter | Type | Optional | Description
|--------------|----------|--------------|--------------|
token | String | No | The API Auth Token found on your bots page.
client | Snowflake | No | The Client ID for the bot you want to post stats to.

--- 

### Discord.js v12 Example

```js
const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "ibltest.";
const Infinity = require("infinityapi.js")
const ibl = new Infinity(client.user.id, "bot-auth-token")

client.on("ready", () => {
console.log(`Logged in as ${client.user.tag}.`)
setInterval(() => {
   ibl.post(client.guilds.cache.size, '0') // Server Count and 0 Shards
  })
}, 300000) //5 Minutes in MS

client.on("message", message => {
    if(message.author.bot) return
    if(message.content == prefix + "ping"){
        message.reply(`Pong! it took ${client.ws.ping}`)
    }
})

client.login("token")

```

### Discord.js v12 Example (Wtih event handler

```js
module.exports = class extends EventClass {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
  const Infinity = require("infinityapi.js")
  const ibl = new Infinity("BOT_ID_HERE", "AUTH_TOKEN_HERE")
  
   ibl.post(client.guilds.cache.size, '0') // Server Count and 0 Shards
    }
}
```