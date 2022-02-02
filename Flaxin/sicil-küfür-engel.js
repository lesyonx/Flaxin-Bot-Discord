const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  
  

  
  if (!message.member.hasPermission("ADMINISTRATOR")) return  message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu').setDescription(`Maalesef **Yönetici** adlı yetkin yok!`));




  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Bir hata oluştu")
      .setDescription(`Yanlış Kullanım! \n Örnek : \n **#küfür-engel aç/kapat**`);
    message.channel.send(embed);
    return;
  }
  let kufur = await db.fetch(`küfürsadeengel_${message.guild.id}`);
  if (args[0] == "aç") {
    if (kufur) {
      const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Bir hata oluştu")
        .setDescription("Bu sistem zaten aktifmiş");
      message.channel.send(embed);
      return;
    } else {
      db.set(`küfürsadeengel_${message.guild.id}`, "Açık");
      const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("İşte bu kadar")
        .setDescription("Küfür engel Sistemi başarıyla açıldı!");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`küfürsadeengel_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("İşte bu kadar")
      .setDescription("Küfür engel Sistemi başarıyla kapatıldı!");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "küfür-engel",
  description: "",
  usage: "küfür-engel"
};