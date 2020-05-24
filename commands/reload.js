const Discord = require("discord.js");

exports.run = async (bot, message.args) => {

  if(message.author.id != "573210692078010380") return message.channel.send("Vous n'êtes pas le créateur du bot !")
  
  if(!args[0]) return message.channel.send("Veuillez insérer une commande à **reload**.")
  
  let commandName = args[0].toLowerCase()
  
  try {
  
    delete require.cache[require.resolve(`./${commandName].js`)]
    bot.commands.delete(commandName)
    const pull = require(`./${commandName}.js`)
    bot.commands.set(commandName, pull)
    } catch(e) {
      return message.channel.send(`Je n'arrive pas à **reload** la commande \`${args[0].toUpperCase()}\``)
    }
    
    message.channel.send(`La commande \`${args[0].toUpperCase()}\` a été **reload** avec succès !`)
    console.log(`[!~] La commande ${commandName} a été reload avec succès !`)
}
