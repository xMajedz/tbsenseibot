const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('files')
		.setDescription('Toribash Files Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_find_replays')
			.setDescription('How To Find Replays Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Find Replays Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('noscript_replayhacking')
			.setDescription('No Script Replay Hacking Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_matarika')
				.setDescription('No Script Replay Hacking Tutorial By Matarika.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_find_replays') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/MhBCtiwqP_Y?si=zMUN0ZunL-011OZy';
			};
		};
		if (group === 'noscript_replayhacking') {
			if (command === 'by_matarika') {
				content = 'https://youtu.be/HfCJmvlvp7s?si=01zRk5jj9FrkL37G';
			};
		};
		await interaction.reply(content);
	},
};
