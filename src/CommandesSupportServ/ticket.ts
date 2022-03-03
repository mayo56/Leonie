import { client } from "../Leonie";
import { Message, MessageEmbed, MessageButton, MessageActionRow, MessageCollector, BaseGuildTextChannel, CategoryChannel, TextChannel } from "discord.js";



/**
 * Ici se trouve l'embed et le bouton de la commande ticket
 */
const ticketEmbed = new MessageEmbed()
    .setAuthor({ name: "Tickets" })
    .setDescription("Vous pouvez faire une demande de ticket si vous avez rencontré un bug avec le bot.")
    .addFields({
        name: "Requière:",
        value: "`- DM ouverts`\n`- Avoir rencontré un bug`"
    });
const ButtonTicket = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('ticketid')
            .setLabel('Ticket')
            .setStyle('PRIMARY')
            .setEmoji("🎟️"),
    );


/**
 * Ici se trouve l'embed de la récéption du rapport de bug de l'utilisateur
 */
const EmbedReceptionReportBug = new MessageEmbed()
    .setTitle("Ticket ouvert")
    .setDescription("Rédigez en un message un rapport sur le bug que vous avez rencontrés.");

/**
 * Cette interraction va s'occupé de récupérer la
 * demande de l'utilisateur en DM.
 */

client.on('interactionCreate', async int => {
    if (!int.isButton()) return;
    if (int.customId === "ticketid") {

        int.user.createDM().then(channel => {
            const user = int.user // on recupère l'user de interraction 
            user.send({ embeds: [EmbedReceptionReportBug] }).catch(console.error); // on envoie l'embed en DM
            const collector = int.user.dmChannel?.createMessageCollector({ time: 600000 });
            collector?.on("collect", m => { // on recup le message
                if (m.author.bot) return;
                const EmbedTicketSend = new MessageEmbed()
                    .setTitle("Ticket fermé")
                    .setDescription("Votre rapport a été envoyé. Votre ticket va être fermé.");
                m.channel.send({ embeds: [EmbedTicketSend] })
                var channel = client.channels.cache.find(salon => salon.type == "GUILD_TEXT" && salon.id == "947596494402387978") as TextChannel
                if (!channel) return;
                const args = m.content.trim().split(/ +/g)
                const EmbedRapportSend = new MessageEmbed()
                    .setTitle("Rapport de bug")
                    .setAuthor({ name: m.author.tag })
                    .setDescription(args.join(' '))
                    .setColor("RED")
                channel.send({ embeds: [EmbedRapportSend] }) // on envoie le message
                int.user.deleteDM()
            })
        }).catch(() => int.reply({ content: `Désolé, je n'ai pas pu vous envoyer de message`, ephemeral: true }))
    }
})

/**
 * 
 * @param command commande est le nom de la commande demané
 * @param owner owner est l'id de l'owner du bot (Mayo)
 * 
 * Cette commande permet d'afficher les tickets de support 
 * du bot sur le serveur.
 */

export default function ticket(message: Message, command: string, owner: string) {
    if (message.author.bot) return;
    if (command === "ticket" && message.author.id === owner) {
        message.channel.send({ embeds: [ticketEmbed], components: [ButtonTicket] })
    }
}