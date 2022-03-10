import { Client, MessageActionRow, MessageEmbed, MessageButton } from "discord.js";
import { LienFire } from "./ClassicCommands";

const wait = require('node:timers/promises').setTimeout;

export default function interractionFire(client: Client) {
    client.on('interactionCreate', async int => {
        if (!int.isButton()) return;

        if (int.customId === "eteindre") {
            const NewEmbed = new MessageEmbed()
                .setTitle("Feu de camp")
                .setDescription(`${int.user.username} a éteint le feu.`)
                .setImage(LienFire[1])

            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('eteindre')
                        .setLabel('Éteindre')
                        .setStyle('DANGER')
                        .setDisabled(true),
                    new MessageButton()
                        .setCustomId("saucisse")
                        .setLabel("Mettre une saucisse à cuire")
                        .setStyle("PRIMARY")
                        .setDisabled(true),
                    new MessageButton()
                        .setCustomId("regarder")
                        .setLabel("Regarder le feu")
                        .setStyle("SECONDARY")
                        .setDisabled(true),
                );
            int.update({ embeds: [NewEmbed], components: [row] })
        }
        if (int.customId === "saucisse") {
            const NewEmbed = new MessageEmbed()
                .setTitle("Feu de camp")
                .setDescription(`${int.user.username} a mis une saucise sur le feu.\nPs: Elle est caché derrière le feu, donc vous ne la verrez pas. Ou bien c'est qu'elle est tombée dans le feu ?? C'est pour ça que le feu s'intensifie.`)
                .setImage(LienFire[2])

            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('eteindre')
                        .setLabel('Éteindre')
                        .setStyle('DANGER')
                        .setDisabled(true),
                    new MessageButton()
                        .setCustomId("saucisse")
                        .setLabel("Mettre une saucisse à cuire")
                        .setStyle("PRIMARY")
                        .setDisabled(true),
                    new MessageButton()
                        .setCustomId("regarder")
                        .setLabel("Regarder le feu")
                        .setStyle("SECONDARY")
                        .setDisabled(true),
                );
            int.update({ embeds: [NewEmbed], components: [row] })
        }
        if (int.customId === "regarder") {
            let nombre = 0
            const NewEmbed = new MessageEmbed()
                .setTitle("Feu de camp")
                .setDescription(`${int.user.username} regarde le feu.\nPs: Le feu s'éteindra dans 2 minutes.`)
                .setImage(LienFire[nombre])

            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('eteindre')
                        .setLabel('Éteindre')
                        .setStyle('DANGER')
                        .setDisabled(true),
                    new MessageButton()
                        .setCustomId("saucisse")
                        .setLabel("Mettre une saucisse à cuire")
                        .setStyle("PRIMARY")
                        .setDisabled(true),
                    new MessageButton()
                        .setCustomId("regarder")
                        .setLabel("Regarder le feu")
                        .setStyle("SECONDARY")
                        .setDisabled(true),
                );

            await int.update({ embeds: [NewEmbed], components: [row] })
            
            await wait(120000)
            let newnombre = 1
            const NewEmbed2 = new MessageEmbed()
                .setTitle("Feu de camp")
                .setDescription(`${int.user.username} regarde les braises encore chaudes.\nPs: Le feu est éteint.`)
                .setImage(LienFire[newnombre])
            await int.editReply({ embeds: [NewEmbed2], components: [row] })
        }

    })
}