const Discord = require('discord.js');
const { prefix, token } = require ('./config.json')
const client = new Discord.Client();

client.once ('ready', () => {
  console.log('Ready!');

});

client.login(token);

client.on('message', (message) => {
  if (message.content === `${prefix}ping`) { 
    message.channel.send('Pong.');
  }
  else if (message.content === `${prefix}avatar`) { 
    if (!message.mentions.users.size) { 
    return message.channel.send(`Votre avatar est : ${message.author.displayAvatarURL({ format: 'png' })}`)
    } 
  }  
  }); 

  client.on("ready", async () =>{
    console.log("Le bot est allumé")
    client.user.setActivity("Se fait développer par Inspra#6139")
  })

  client.on("message", (message) => {
    if(message.content.startsWith("/clear")){
    if(message.member.hasPermission ('MANAGE_MESSAGES')){
      let args = message.content.trim().split(/ +/g);
      if(args[1]){
        if(!isNaN(args[1]) && args[1] >=  args[1] <= 99){
          message.channel.bulkDelete(args[1])
          message.channel.send(`Vous avez supprimé ${args[1]} message(s)`)
        }
        else{
             message.channel.send(`Vous devez indiquer une valeur entre 1 et 99 !`)
        }
      }
          else{ 
            let clearembxd = new Discord.MessageEmbed
            .setColor('#0099ff')
            .setDescription('Veuillez indiquer le nombre de message à clear')
          }
          message.channel.send(clearembxd)
        }
        else{
             message.channel.send(`Vous devez avoir la permission de gérer les messages pour éxécuter cette commande`)
        }
      }
      if(message.content.startsWith("/stats")){
        let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size;
        let totalmembers = message.guild.members.cache.size;
        let totalservers = client.guilds.cache.size;
        let totalbots =  message.guild.members.cache.filter(member => member.user.bot).size;
        const monembed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Statistiques')
            .setURL('https://discord.js.org/')
            .setAuthor('LitanianBOT', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('Voici les statistiques du serveur')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addFields(
                { name: 'Nombre de membrs total', value: totalmembers, inline: true },
                { name: 'Membres connéctés : ', value: onlines, inline: true },
                { name: 'Nombre de serveurs auquel le bot appartient : ', value: totalservers, inline: true },
                { name: 'Nombres de bots sur le serveur : ', value: totalbots, inline: true },
                { name: 'Nombre d\'arrivants : ', value: totalmembers, inline: true },
            )
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('LitanianBOT by Inspra_#6139', 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(monembed);
    }
  })


   
