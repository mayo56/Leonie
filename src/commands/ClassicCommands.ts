import { Message, MessageEmbed } from "discord.js";

export default function ClassiCommands (message:Message, command:string, args:string[]) {
    /***
     * Cette fonction prends en paramètre :
     * @param message (message sur Discord)
     * @param command (commande qu'execute l'utilisateur Discord (sans le prefix))
     * @param args (arguments qui suivent la commande)
     * Et envoie une réponse selon la commande executé.
     */
    if (command === "ping") {
        message.reply("Pong !");
    }else
    if(command === "botinfo") {
        const embed = new MessageEmbed()
            .setTitle("Informations sur le bot")
            .setDescription("**Nom:** `Léonie`\n**Préfix:**`_/`\n**Serveur de support:** https://discord.gg/NMkamwQD7y");
        message.reply({ embeds: [embed] });
    };
};