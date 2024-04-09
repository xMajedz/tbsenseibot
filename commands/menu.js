const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('menu')
		.setDescription('Menu Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_movememory')
			.setDescription('How To MoveMemory Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To MoveMemory Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('using_the_menu')
			.setDescription('Using The Menu Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_matarika')
				.setDescription('Using The Menu Tutorial By Matarika.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_movememory') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/JiyHztXveOM?si=dUmpIjhs5FopkWVM';
			};
		};
		if (group === 'using_the_menu') {
			if (command === 'by_matarika') {
				content = 'https://youtu.be/wax-dHM-B6g?si=ASfWFKFkldji1h1h';
			};
		};
		await interaction.reply(content);
	},
};
