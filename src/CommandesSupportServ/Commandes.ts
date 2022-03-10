import { client } from "../Leonie";
import { Message, MessageEmbed } from "discord.js";


const ListeDeGIF = [
    "https://c.tenor.com/uTT2gXruNtkAAAAC/oreimo-anime.gif",
    "https://c.tenor.com/qF7mO4nnL0sAAAAC/abra%C3%A7o-hug.gif",
    "https://c.tenor.com/1WtAgS78CB0AAAAd/duck-dance.gif"
]
const ListeDePhrase = [
    "a frappé",
    "fait un câlin à",
    "danse avec un canard !"
]
export { ListeDeGIF, ListeDePhrase }

function GIFEmbed(nombre: number, message: Message, mention: any) {
    const embed = new MessageEmbed()
        .setDescription(`**${message.author.username}** ${ListeDePhrase[nombre]} **${mention == "Léonie" ? mention : mention.username}**`)
        .setImage(ListeDeGIF[nombre])
    message.reply({ embeds: [embed] })
};


function GIFEmbedSansMention(nombre: number, message: Message) {
    const embed = new MessageEmbed()
        .setDescription(`**${message.author.username}** ${ListeDePhrase[nombre]}`)
        .setImage(ListeDeGIF[nombre])
    message.reply({ embeds: [embed] })
};



/**
 * 
 * @param message récupère les informations du message
 * 
 * Cette fonction sert de test les commandes sur le serveur de support
 */
export default async function CommandServeur(message: Message, command: string) {
    //if (message.channel.id !== "949427834567405639") return;
    let mention = message.mentions.users.first() || "Léonie";
    if (command === "slap") {
        GIFEmbed(0, message, mention)
    }
    if (command === "hug") {
        GIFEmbed(1, message, mention)
    }
    if (command === "dance") {
        GIFEmbedSansMention(2, message)
    }
}