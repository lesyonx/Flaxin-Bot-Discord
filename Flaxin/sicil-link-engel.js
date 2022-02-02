const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  
  
 
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return  message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu').setDescription(`Maalesef **Yönetici** adlı yetkin yok!`));
  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Bir hata oluştu")
      .setDescription(`Yanlış Kullanım! \n Örnek : \n **#reklam-engel aç/kapat**`);
    message.channel.send(embed);
    return;
  }
  let kufur = await db.fetch(`reklamsadeengel_${message.guild.id}`);
  if (args[0] == "aç") {
    if (kufur) {
      const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Bir hata oluştu")
        .setDescription("Görünüşe Göre Reklam-Engel Sistemi Zaten Aktif");
      message.channel.send(embed);
      return;
    } else {
      db.set(`reklamsadeengel_${message.guild.id}`, "Açık");
      const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("İşte bu kadar")
        .setDescription("Reklam-Engel Sistemi Başarıyla Açıldı");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`reklamsadeengel_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("İşte bu kadar")
      .setDescription("Reklam-Engel Sistemi Başarıyla Kapandı");

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
  name: "link-engel",
  description: "",
  usage: "reklam-engel"
};