const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('judo')
		.setDescription('Judo Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_judo')
			.setDescription('How To Judo Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Judo Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_judokick')
			.setDescription('How To Judo Kick Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Judo Kick Tutorial By Matarika.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_judo') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/g_JlIBSdyAc?si=hZn6x7eRCp8kFtMd';
			};
		};
		if (group === 'howto_judokick') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/3t-xyo7VtFQ?si=2vQspvJIjGERD0p3';
			};
		};
		await interaction.reply(content);
	},
};
