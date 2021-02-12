const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log(`${client.user.tag} is online!`)
});

client.on('message', async (message) => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === "ping") {
        message.reply(`Pong!`)
        return
    }
    else if (command == "avatar" || command == "av") {
        let member = message.mentions.users.first() || message.author;
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${member.username}'s Avatar!`)
        .setImage(member.displayAvatarURL({ dynamic: true }));
        message.channel.send(embed)
    }
})

client.login(config.token)