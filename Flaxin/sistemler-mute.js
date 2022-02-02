const Discord = require("discord.js"),
db = require("quick.db");


exports.run = async (client, message, args, member) => {


  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "#";

   const flaxin = new Discord.MessageEmbed()
     .setAuthor(`Flaxin`,message.author.avatarURL())
    .addField("Komutlar:", `\n> • | [#mute-kur](https://discord.gg/f6jENhm) \n \n> • | [#mute](https://discord.gg/f6jENhm) \n \n>  • | [#mute-sıfırla](https://discord.gg/f6jENhm)`,true)
    .addField(`Açıklama`, `> **Mute sistemini kurar** \n \n> **Etiketlenen sunucuda susturur** \n \n> **Mute sistemini sıfırlar**`, true)
    .addField(":link: | Linkler:", "• [Davet Et](https://discordapp.com/oauth2/authorize?client_id=702899426947235950&scope=bot&permissions=8) • [Destek Sunucusu](https://discord.gg/f6jENhm) • [Oy Ver](https://bit.ly/FlaxinVote) • [Sponsor](https://discord.gg/vvcgUQdYWA)•")
      .setFooter("Flaxin © 2021", client.user.displayAvatarURL())
    .setColor("ORANGE")
   .setTimestamp()
   message.channel.send(flaxin)

  };
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "mute-sistemi"
}
  