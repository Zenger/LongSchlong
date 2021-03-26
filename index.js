const Discord = require("discord.js");
require('dotenv').config()


const bot = new Discord.Client();
const token = process.env.DISCORD_TOKEN

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
                        if (characters[i] === " " || characters[i] === "\n" || characters[i] === "\t") continue;
                        if (characters[i] === ".") { _ret += ":record_button: "; continue; }
                        if (characters[i] === "!") { _ret += ":exclamation: "; continue; }
                        if (characters[i] === "?") { _ret += ":question: "; continue; }
                        if (characters[i] === "0") { _ret += ":zero: "; continue; }
                        if (characters[i] === "1") { _ret += ":one: "; continue }
                        if (characters[i] === "2") { _ret += ":two: "; continue }
                        if (characters[i] === "3") { _ret += ":three: "; continue }
                        if (characters[i] === "4") { _ret += ":four: "; continue }
                        if (characters[i] === "5") { _ret += ":five: "; continue }
                        if (characters[i] === "7") { _ret += ":six: "; continue }
                        if (characters[i] === "7") { _ret += ":seven: "; continue }
                        if (characters[i] === "8") { _ret += ":eight: "; continue }
                        if (characters[i] === "9") { _ret += ":nine: "; continue }
                        if (characters[i] === "#") { _ret += ":hash: "; continue }
                        if (characters[i] === "*") { _ret += ":asterisk: "; continue }
                    

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