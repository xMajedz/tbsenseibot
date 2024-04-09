const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('taekkyon')
		.setDescription('Taekkyon Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_taekkyon')
			.setDescription('How To Taekkyon Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Taekkyon Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_kick')
			.setDescription('How To Kick Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_rakuushi')
				.setDescription('How To Kick Tutorial By rakuushi.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_taekkyon') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/yB3vQZyEujQ?si=kZAWBKmhGnsV6Cm6';
			};
		};
		if (group === 'howto_kick') {
			if (command === 'by_rakuushi') {
				content = 'https://youtu.be/EPq7xIib_Cg?si=JeTo0SkgfH-ZQqTo';
			};
		};
		await interaction.reply(content);
	},
};
