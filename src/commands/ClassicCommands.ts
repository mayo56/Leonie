import { Message, MessageActionRow, MessageEmbed, MessageButton } from "discord.js";
import HelpEmbedFunctionMessage from "./helpEmbed"

export default function ClassiCommands(message: Message, command: string, args: string[]) {
    /***
     * Cette fonction prends en paramètre :
     * @param message (message sur Discord)
     * @param command (commande qu'execute l'utilisateur Discord (sans le prefix))
     * @param args (arguments qui suivent la commande)
     * Et envoie une réponse selon la commande executé.
     */
    if (command === "ping") {
        message.reply("Pong !");
    }
    if (command === "botinfo") {
        const embed = new MessageEmbed()
            .setTitle("Informations sur le bot")
            .setDescription("**Nom:** `Léonie`\n**Préfix:**`_/`\n**Serveur de support:** https://discord.gg/NMkamwQD7y");
        message.reply({ embeds: [embed] });
    }
    if (command === "avatar") {
        const user = message.mentions.users.first() || message.author
        const AvatarEmbed = new MessageEmbed()
            .setDescription(`Photo de profile de **${user.username}**`)
            .setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
        message.reply({ embeds: [AvatarEmbed] });
    }
    if (command === "fire") {
        EmbedFire(message, 0)
    }
    if (command === "help") {
        HelpEmbedFunctionMessage(message)
    }
};


const LienFire = [
    "https://i.imgur.com/wOIE4TH.jpg", // feu de camp alumé
    "https://i.imgur.com/4qkYvVx.jpg", // feu de camp éteint
    "https://i.imgur.com/eVELF6r.jpg" // feu de camp avec saucisse
]
export{LienFire}

function EmbedFire(message:Message, nombre:any) {
    const FireEmbed = new MessageEmbed()
            .setTitle("Feu de camp")
            .setDescription(`${message.author.username} a allumé un pitit feu de camp. Que souhaites-tu faire ?`)
            .setImage(LienFire[nombre]);
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('eteindre')
                    .setLabel('Éteindre')
                    .setStyle('DANGER'),
                new MessageButton()
                    .setCustomId("saucisse")
                    .setLabel("Mettre une saucisse à cuire")
                    .setStyle("PRIMARY"),
                new MessageButton()
                    .setCustomId("regarder")
                    .setLabel("Regarder le feu")
                    .setStyle("SECONDARY"),
            );
        message.reply({ embeds:[FireEmbed], components:[row] })
}