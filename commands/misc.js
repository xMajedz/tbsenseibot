const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('misc')
		.setDescription('Misc Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_keyframe')
			.setDescription('How To Keyframe Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Keyframe Tutorial By Concon.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_keyframe') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/C9v41fCSvoE?si=Klv5dDiQMU-X00m3';
			};
		};
		await interaction.reply(content);
	},
};
