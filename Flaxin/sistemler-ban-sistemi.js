const Discord = require("discord.js"),
db = require("quick.db");
exports.run = async (client, message, args, member) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "#";

   const flaxin = new Discord.MessageEmbed()
     .setAuthor(`Flaxin`,message.author.avatarURL())
    .addField("Komutlar:", `\n> • | [#ban-sistemi-kur](https://discord.gg/f6jENhm) \n \n>  • | [#ban-sistemi-sıfırla](https://discord.gg/f6jENhm)`,true)
    .addField(`Açıklama`, `> **Ban sistemini kurar** \n \n> **Ban sistemini sıfırlar**`, true)
    .addField("Not :", "`Sistemi ve bileşenleri kurduktan sonra genel komutlar kategorisindeki #ban komudu ile çalışmaktadır. \n Örnek : \n #ban @etiket güle güle kardeşim`")
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
    name: "ban-sistemi"
}
  