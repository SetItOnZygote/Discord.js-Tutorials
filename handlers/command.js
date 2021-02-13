const { readdirSync } = require('fs');

module.exports = (client) => {
    const load = dirs => {
    const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith(`.js`));
    for(let file of commands) {
        let pull = require(`../commands/${dirs}/${file}`);
        client.commands.set(pull.name, pull);
        if(pull.aliases) pull.aliases.forEach(a => client.aliases.set(a, pull.name));
        console.log(`${pull.name} has been Loaded!`)
    }
    };
    ["testing"].forEach(x => load(x));
}