import { ListeDeGIF, ListeDePhrase } from "../CommandesSupportServ/Commandes";
import HelpEmbedFunctionInt from "./helpEmbed"
import { Client, MessageEmbed, MessageActionRow, MessageButton } from "discord.js";
import {LienFire} from "../commands/ClassicCommands"




function EmbedFire(int:any, nombre:any) {
    const FireEmbed = new MessageEmbed()
            .setTitle("Feu de camp")
            .setDescription(`${int.user.username} a allumé un pitit feu de camp. Que souhaites-tu faire ?`)
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
        int.reply({ embeds:[FireEmbed], components:[row] })
            }

export default function interraction(client:Client) {
    client.on('interactionCreate', int => {
        if (!int.isCommand()) return;

        if (int.commandName === "ping") {
            int.reply({ content: "Pong !" })
        } else

        if (int.commandName === "avatar") {
            const user = int.options.getUser('utilisateur') || int.user
            const AvatarEmbed = new MessageEmbed()
                .setDescription(`Photo de profile de **${user.username}**`)
                .setImage(user.displayAvatarURL({ size: 4096, dynamic:true}))
            int.reply({ embeds: [AvatarEmbed] })
        } else

        if (int.commandName === "hug") {
            const user = int.options.getUser('utilisateur') || "Léonie"
            const HugEmbed = new MessageEmbed()
                .setDescription(`**${int.user.username}** ${ListeDePhrase[1]} **${user === "Léonie"? "Léonie" : user.username}**`)
                .setImage(ListeDeGIF[1])
            int.reply({ embeds: [HugEmbed] })
        } else
        if (int.commandName === "dance") {
            const HugEmbed = new MessageEmbed()
                .setDescription(`**${int.user.username}** ${ListeDePhrase[2]}`)
                .setImage(ListeDeGIF[2])
            int.reply({ embeds: [HugEmbed] })
        }
        if (int.commandName === "slap") {
            const user = int.options.getUser('utilisateur') || "Léonie"
            const SlapEmbed = new MessageEmbed()
                .setDescription(`**${int.user.username}** ${ListeDePhrase[0]} **${user === "Léonie"? "Léonie" : user.username}**`)
                .setImage(ListeDeGIF[0])
            int.reply({embeds:[SlapEmbed]})
        } else
        if (int.commandName === "fire") {
            EmbedFire(int, 0)
        }
        if (int.commandName === "help") {
            HelpEmbedFunctionInt(int)
        }
    })
}