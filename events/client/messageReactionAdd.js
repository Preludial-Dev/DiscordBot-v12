const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports = (bot, reaction, user) => {

  if(reaction.bot) return;

  let messageid = reaction.message.id

  let guilds = reaction.message.channel.guild
  

  let guild = bot.guilds.cache.get(guild.id)


  let check = db.get(`reactionroles.${guild.id}.${messageid}`)
  if(!check) return;

  if(reaction.emoji.name === check.reaction) {

  let mem = guild.members.cache.get(user.id)

  let role = guild.roles.cache.get(check.role)

  let roleCheck = mem.roles.cache.has(check.role)
  if(!roleCheck) {
    mem.roles.add(role)

    let embed = new MessageEmbed()
    .setColor('#1df2af')
    .setTitle('Role Added')
    .setDescription(`The role ${role.name} has been added to you in ${guild.name}`)
    mem.send(embed).catch(e => {
      
    })
  }

  }
}