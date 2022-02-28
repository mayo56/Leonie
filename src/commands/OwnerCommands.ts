import { Message } from "discord.js";
import { client } from "../Leonie";

export default function OwnerCommands (message: Message, command:string, args:string[], owner: any) {
    /***
     * Cette fonction prend en paramètres:
     * @param message (message sur Discord)
     * @param command (commande qu'execute l'utilisateur Discord (sans le prefix))
     * @param args (arguments qui suivent la commande)
     * @param owner (Id du propriétaire du bot)
     * Et renvoie une reponse à la commande choisi (et effectue les modifications demandés)
     * /!\ Executable seulement par le propriétaire du bot.
     */

    if (command === "setactivity") {
        if (message.author.id === owner) {
            client.user?.setActivity(args.join(' '));
            message.reply(`Changement effectué:\n__**Status:**__ ${args.join(' ')}`);
        } else {
            return message.reply("Seul mon propriétaire peut executer cette commande\n**Erreur** \`403\`");
        };
    }
}

