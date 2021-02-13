const { readdirSync } = require('fs');

module.exports = (client) => {
    const load = dirs => {
     const events = readdirSync(`./events/${dirs}/`).filter(d => d.endsWith(`.js`));
     for (let file of events) {
         const eventss = require(`../events/${dirs}/${file}`);
         let Name = file.split(`.`)[0];
         client.on(Name, eventss.bind(null, client));
         console.log(`${Name} has been Loaded!`)
        }
    };
    ["client"].forEach(x => load(x));
}