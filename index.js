const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token, client_id } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection()

client.cooldowns = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.once(Events.ClientReady, c => {
	console.log('Sensei is Online')
})

const cooldown = 10;
const coolingdown = new Collection;

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	//const { cooldowns } = client;

	/*if (!cooldowns.has(command.data.name)) {
		cooldowns.set(command.data.name, new Collection());
	}*/
	
	const now = Date.now();

	//const timestamps = cooldowns.get(command.data.name);

	const defaultCooldownDuration = 3;
	const cooldownAmount = (cooldown ?? defaultCooldownDuration) * 1000;

	/*if (timestamps.has(interaction.user.id)) {
		const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;
		if (now < expirationTime) {
			const expiredTimestamp = Math.round(expirationTime / 1000);
			return interaction.reply({ content: `Please wait, you are on a cooldown for \`${command.data.name}\`. You can use it again <t:${expiredTimestamp}:R>.`, ephemeral: true });
		}
	}

	timestamps.set(interaction.user.id, now);
	setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);*/

	if (coolingdown.has(interaction.user.id)) {
		let content = ""
		const expirationTime = coolingdown.get(interaction.user.id) + cooldownAmount;
		if (now < expirationTime) {
			console.log(now)
			console.log(expirationTime)
			const expiredTimestamp = Math.round(expirationTime / 1000);
			console.log(expiredTimestamp)
			if (now > expirationTime) {
				content = `You can use it again.`
			}
			else {
				content = `Please wait, you are on a cooldown. You can use it again <t:${expiredTimestamp}:R>.`
			}
			return interaction.reply({
				content: content,
				ephemeral: true
			});
		}
	}

	coolingdown.set(interaction.user.id, now);
	setTimeout(() => coolingdown.delete(interaction.user.id), cooldownAmount);

	try {
		// ...
	} catch (error) {
		// ...
	}
	
	//console.log(command)

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}

	//console.log(interaction);
});

client.login(token);
