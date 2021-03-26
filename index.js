const Discord = require("discord.js");

const bot = new Discord.Client();
const token = 'ODI0ODQyNDAyODAzNDgyNjU0.YF1QWQ.25IqjPvnsjUoJ0l9Ndubm2a7sdU'

bot.on('ready', () => {
    const prefix = '!'

    bot.on('message', async (msg) => {
        //if our message doesnt start with our defined prefix, dont go any further into function
        if (!msg.content.startsWith(prefix)) {
            return
        }

        //slices off prefix from our message, then trims extra whitespace, then returns our array of words from the message
        const args = msg.content.slice(prefix.length).trim().split(' ')

        //splits off the first word from the array, which will be our command
        const command = args.shift().toLowerCase()
        let _ret = "";
        if (command === "reggie") {
            

            for (let j = 0; j < args.length; j ++) {
                
                if (args[j].length > 0) {
                   
                    let characters = args[j].split("");

                    for (let i = 0; i < characters.length; i++) {
                        if (characters[i] === " " || characters[i] === "\n" || characters[i] === "\t" || characters[i] === ".") continue;
                        _ret += ":regional_indicator_" + characters[i].toLowerCase() + ": ";
                    }

                    _ret += "  ";
                }
            }

            msg.reply(_ret);
        }

    })
})

bot.login(token)