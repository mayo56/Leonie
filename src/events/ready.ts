import {Client} from "discord.js";

export default function Ready (client: Client)  {
    console.log(`${client.user?.username} Connecté!`);

    client.user?.setActivity("se faire coder les fesses");
};
