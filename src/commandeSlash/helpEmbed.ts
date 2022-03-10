import { Client, MessageEmbed } from "discord.js";

// Commandes d'info
const cmdInfo = [
    "`botinfo` permet d'afficher les informations sur le bot",
    "`avatar <@mention>` permet d'afficher la photo de profile d'un utilisateur (@mention n'est pas obligatoire)",
    ":x:`serveravatar` permet d'afficher l'image du serveur",
    ":x:`banner <@mention>` permet d'afficher la bannière d'un utilisateur (@mention n'est pas obligatoire)"
]

const cmdReact = [
    "`hug <@mention>` Permet de faire un gros câlin à un utilisateur ou bien à Léonie (@mention n'est pas obligatoire)",
    "`slap <@mention>` Permet de frapper un utilisateur ou bien à Léonie (@mention n'est pas obligatoire)",
    "`fire`Permet d'allumer un petit feu et d'interagir avec.",
    ":x:`dance` Permet de danser avec un pitit canard",
    ":x:`kiss <@mention>` Permet de faire un bisou à un utilisateur ou bien à Léonie (@mention n'est pas obligatoire)",
]



//export de l'embed d'help en Messsage
export default function HelpEmbedFunctionInt(int:any) {
    const HelpEmbed = new MessageEmbed()
        .setTitle("Toutes les commandes de Léonie")
        .setDescription("Vous pouvez m'utiliser avec le préfix `_/`. \n__Exemple:__\n`_/<commande>`\nPs: Entrez, à la place de <commande>, une des commandes suivantes.")
        .addFields(
            {
                name: "__Commandes d'informations:__",
                value: cmdInfo.join("\n")
            },
            {
                name: "__Commandes de fun et de réaction:__",
                value: cmdReact.join("\n")
            }
        )
    int.reply({ embeds:[HelpEmbed] })
}
