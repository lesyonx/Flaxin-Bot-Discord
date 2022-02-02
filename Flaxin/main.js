//////////////// Sicil sistemi 
client.on("message", async message => {
  let küfürsadeengel = await db.fetch(`küfürsadeengel_${message.guild.id}`);
  let küfürsahibi = message.member;
  const kfrlog =  db.fetch(`kufur.log_${message.guild.id}`)
  if (!küfürsadeengel) return;
  if (küfürsadeengel == "Açık") {
const küfür = [
      "amk",
      "sikiyim",
      "ananıskm",
      "piç",
      "porn",
      "pornhub",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "amcık",
      "amık",
      "yarram",
      "sikimi",
      "mk",
      "mq",
      "aq",
      "amq"
    ];
    if (küfür.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
          let uyari = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("Flaxin Küfür Engel Sistemi")
   .setDescription(`Hey! \n > <@${message.author.id}> Ne yaptığını sanıyorsun ? \n> Bu sunucuda küfür koruması aktif! Git içinden küfür et :angry:`)
          message.channel.send(uyari).then(msg => msg.delete({ timeout: 6000 }));
          
          
          const embed1 = new Discord.MessageEmbed()
          .setThumbnail(client.user.avatarURL)
          .setColor("ORANGE")
          .setDescription(`İşte Kısa Bilgi`, true)
          .setTitle("Flaxin | Küfür Denetleme Sistemi")
          .setFooter( message.guild.name , client.user.displayAvatarURL())
          .addField("> Küfür Eden Kişi", `<@${message.author.id}>` )
          .addField("> Kişinin İD'si", `${message.author.id}`)
          .addField("Not","Küfür ettiği için şahsın küfür etme sayısına **1** puan eklemiştir")
          client.channels.cache.get(kfrlog).send(embed1)
          
          db.add(`sicil.küfür${message.author.id}.${message.guild.id}`, 1)
  
  
          
          }
      }
    }
});
//////////


client.on("message", async message => {
  let reklamsadeengel = await db.fetch(`reklamsadeengel_${message.guild.id}`);
  let reklamsahibi = message.member;
  const linklog = db.fetch(`link.log_${message.guild.id}`) 
  if (!reklamsadeengel) return;
  if (reklamsadeengel == "Açık") {
const reklam = [
      "discord.app",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".org",
      ".com.tr",
      ".hub"
    ];
    if (reklam.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        let uyari = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Flaxin Link Engel Sistemi")
        .setDescription(`Hey! \n > <@${message.author.id}> Ne yaptığını sanıyorsun ? \n> Bu sunucuda reklam koruması aktif! \n  Git başka yerde reklam yap :angry:`)
               message.channel.send(uyari).then(msg => msg.delete({ timeout: 6000 }));


               const embed11 = new Discord.MessageEmbed()
               .setThumbnail(client.user.avatarURL)
               .setColor("ORANGE")
               .setDescription(`İşte Kısa Bilgi`, true)
               .setTitle("Flaxin | Link Denetleme Sistemi")
               .setFooter( message.guild.name , client.user.displayAvatarURL())
               .addField("> Link Atan Kişi", `<@${message.author.id}>` )
               .addField("> Kişinin İD'si", `${message.author.id}`)
               .addField("Not","Link attığı için şahsın link atma sayısına **1** puan eklemiştir")
               client.channels.cache.get(linklog).send(embed11)
               
               db.add(`sicil.link${message.author.id}.${message.guild.id}`, 1)
        
        
        
        
        
              }
      }
    }
});













  ////////Otocevap
const Discord = require("discord.js"),
db = require("quick.db");
exports.run = async (client, message, args, member) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "#";

   const flaxin = new Discord.MessageEmbed()
     .setAuthor(`Flaxin`,message.author.avatarURL())
    .addField("Komutlar:", `\n> • | [#oto-cevap-ekle](https://discord.gg/f6jENhm) \n \n>  • | [#oto-cevap-sil](https://discord.gg/f6jENhm) \n \n>  • | [#oto-cevap-sil](https://discord.gg/f6jENhm)`,true)
    .addField(`Açıklama`, `> **Oto cevap ekler** \n \n> **Oto cevap siler** \n \n> **Aktif olan oto cevabı listeler**`, true)
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
    name: "otocevap-sistemi"
}
  