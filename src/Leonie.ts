import { Client, Intents } from 'discord.js';
import Ready from "./events/ready";
import { prefix, token, OwnerId } from "./config.json";

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});
export { client }

client.on('ready', () => {
  console.log(`Lancement de ${client.user?.username}`)
  Ready(client)
})


/***
 * Ici se trouve tout les éléments pour les commandes sur discord
 * (Commandes executés comme : ./<commande>)
 */
import ClassiCommands from "./commands/ClassiCommands";
import OwnerCommands from './commands/OwnerCommands';

client.on('messageCreate', message => {
  if (message.author.bot) return;  // si bot => return
  let validprefix = message.content.split('') // découpage lettre par lettre
  if (validprefix[0] + validprefix[1] === prefix) { // si les deux premier caractères son "./" => executer commandes

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if (!args[0]) return;
    const command = args[0].toLowerCase()

    // Cette constante renvoie les arguments sans le nom de la commande
    const argstest = message.content.slice(prefix.length + command.length).trim().split(/ +/g)


    ClassiCommands(message, command, argstest)
    OwnerCommands(message, command, argstest, OwnerId)
  }
})






/**
 * Ici ce trouve les messages quand le bot est ajouté à un serveur
 * (envoie du message sur le salon textuel par défaut)
 */
import AddToGuild  from "./events/guildAdd"
AddToGuild()


client.login(token)