const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('mushu')
		.setDescription('Mushu Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_mushu')
			.setDescription('How To Mushu Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Mushu Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_powerpunch')
			.setDescription('How To Powerpunch Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Powerpunch Tutorial By Concon.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_mushu') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/J8AQD4ljqgs?si=-ucbjN9wbQVK-cuR';
			};
		};
		if (group === 'howto_powerpunch') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/zWMbmvZP87Q?si=lWEleYT52WIMJuYY';
			};
		};
		await interaction.reply(content);
	},
};
