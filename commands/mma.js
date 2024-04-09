const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('mma')
		.setDescription('Toribash MMA Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('how_to_stance')
			.setDescription('How To Stance Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_luminite')
				.setDescription('How To Stance Tutorial By Luminite.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'how_to_stance') {
			if (command === 'by_luminite') {
				content = 'https://youtu.be/-Lc6n97N_2Q?si=03_0W1CFNWibQ0Sh';
			};
		};
		await interaction.reply(content);
	},
};
