# Infinity Bot List API Wrapper
The official NPM Module for interacting with the Infinity Bots API

---

## Installation
`npm i infinityapi.js@latest`

or

`npm i infinityapi.js@1.0.3`

or

`npm i infinityapi.js --save`

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


## POST Stats

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
const IBL = require("infinityapi.js")
const ibl = new IBL(client.user.id, "bot-auth-token")

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

---

## GET Bot Info

### Constructor

```
Infinity()
```

###### Arguments
Parameter | Type | Optional | Description
|--------------|----------|--------------|--------------|
name | String | Yes | The bots username.
owner | Snowflake | Yes | The bot owners ID.
staff | String | Yes | The IDs of all additional owners (if any).
Prefix | String | Yes | The bots listed prefix(s).
short | String | Yes | The bots short description (Shown on cards).
long | String | Yes | The bots long description (Can be markdown).
votes | Number | Yes | The bots total number of upvotes.
invites | Number | Yes | The bots total number of invites.
premium | Boolean | Yes | The bots premium status | true or false.
votes | Number | Yes | The bots total number of upvotes.
support | String | Yes | Link to the bots support server.
website | String | Yes | Link to the bots website.
github | String | Yes | Link to the bots github.
donate | String | Yes | Link to donate to the bot.
tags | String | Yes | List of the bots tags.
library | String | Yes | The library the bot was made with.
servers | Number | Yes | Number of total servers the bot is in.
shards | Number | Yes | Number of total shards the bot has.


--- 

### Example
```js
const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "!";
const IBL = require("infinityapi.js")
const stats = new IBL()
 
client.on("message", message => { 
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(message.content == (prefix + "ping")){
        message.reply(`Pong ${client.ws.ping}ms`)
    }
     if(message.content == (prefix + "stats")){
        stats.get_bot(client.user.id, function(data){
        let embed = new MessageEmbed()
        .setTitle(data.name)
        .addField("Total Votes", data.votes);

        message.channel.send(embed)
        })
    }
})
 
 
client.login("token")
```

### Example (GET User)
```js
const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "!";
const IBL = require("infinityapi.js")
const stats = new IBL()
 
client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(message.content == (prefix + "ping")){
        message.reply(`Pong ${client.ws.ping}ms`)
    }
     if(message.content == (prefix + "stats")){
        stats.get_user("SOME_USER_ID", function(data){
        let embed = new MessageEmbed()
        .setTitle(`Info about ${data.username}`)
        .setDescription('The info here is fetched from the Infinity Bots API')
        .addField("Bio", data.about, true)
        .addField("Certified User?", data.certified_dev, true)
        .addField("GitHub", data.github, true)
        .addField("Website", data.website, true)
        .setFooter(`Requested By: ${message.author.username}`)
 
        message.channel.send(embed)
        })
    }
})
 
 
client.login("token")
```

--- 

