const { execute } = require("./ping");

module.exports = {
    name: "ping", 
    description: "Ping pong!",
    aliases: ["p"],
    async execute(client, message, args) {
        message.reply(`Pong!`)
    }
}