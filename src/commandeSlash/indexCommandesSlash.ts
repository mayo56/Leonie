import { Client } from "discord.js";
const { SlashCommandBuilder } = require('@discordjs/builders');

export default function slashecommandmagueule(client: Client) {

	client.on('ready', () => {
		let slap = {
			name: "slap",
			description: "Tape un membre du serveur ou bien juste Léonie !",
			options: [{
				name: "utilisateur",
				description: "Dis moi qui veux-tu taper ?",
				require: false,
				type: "USER"
			}]
		}
		let dance = {
			name: "dance",
			description: "Permet de dancer avec un pitit canard !"
		}
		let hug = {
			name: "hug",
			description: "Fais un gros câlin à un membre ou bien à Léonie !",
			options: [{
				name: "utilisateur",
				description: "Un câlin à qui ?",
				require: false,
				type: "USER"
			}]
		}
		let avatar = {
			name:"avatar",
			description:"Fait apparaître la photo de profile de l'utilisateur !",
			options: [{
				name: "utilisateur",
				description: "La photo de profile de qui ?",
				require:false,
				type:"USER"
			}]
		}
		let fire = {
			name:"fire",
			description:"Allume un petit feu de camp !"
		}
		let ping = {
			name : "ping",
			description : "Renvoi Pong !"			
		}
		let help = {
			name: "help",
			description: "Permet d'afficher toutes les commandes de Leonie"
		}


		//client.guilds.cache.get('947595989504655472')?.commands.set([])
		//client.guilds.cache.get('937626764916719626')?.commands.set([ping, avatar, hug, slap])
		client.application?.commands.set([ping, avatar, hug, slap, help, dance, fire])
	})
}
