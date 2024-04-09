const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('erthtk')
		.setDescription('Erthtk Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_earthtkv2')
			.setDescription('How To Erthtkv2 Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Erthtkv2 Tutorial By Concon.')
			)
		),
	async execute(interaction) {
		let content = ''
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_earthtkv2') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/Twv3WMxL-G8?si=JQpM6Pr7qPNMujiR';
			};
		};
		await interaction.reply(content);
	},
};
