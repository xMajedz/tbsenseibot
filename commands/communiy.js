const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('community')
		.setDescription('Community Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_make_clans')
			.setDescription('How To Make Clans Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Make Clans Tutorial By Concon.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_make_clans') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/YCdESCKZEh4?si=CyKAKFVxKnAID11p';
			};
		};
		await interaction.reply(content);
	},
};
