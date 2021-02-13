const Discord = require('discord.js');
const config = require('../../config.json');
const { fs } = require('fs');

module.exports = async (client, message) => {
    if(message.author.bot || !message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let commandfile = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if(commandfile) commandfile.execute(client, message, args);
}