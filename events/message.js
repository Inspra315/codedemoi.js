module.exports = (bot, message) => {
  if (message.author.bot) return;
  
  if (message.content.indexOf(bot.config.prefix)
  
  const args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  const cmd = bot.commands.get(command);
  
  if (!cmd) return;
  
  cmd.run(bot, message, args);
};
