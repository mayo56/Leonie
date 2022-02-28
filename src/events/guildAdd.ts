import { client } from "../Leonie";
import { MessageEmbed } from "discord.js";

const AddEmbed = new MessageEmbed()
    .setTitle("Merci de m'avoir invité !")
    .setColor("#2c2f33")
    .setDescription("Je suis Léonie.\nVous pouvez m'utiliser en utilisant le préfix `_/`")
    .setFields({name:"Serveur de support",value:"https://discord.gg/NMkamwQD7y"})
    .setTimestamp();

export default function AddToGuild () {
    client.on('guildCreate', guild => {
        guild.systemChannel?.send({ embeds: [AddEmbed] });
    });
};