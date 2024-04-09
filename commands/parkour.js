const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('parkour')
		.setDescription('Parkour Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_parkour')
			.setDescription('How To Parkour Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_mocucha')
				.setDescription('How To Parkour Tutorial By Mocucha')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_jump')
			.setDescription('How To Jump Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_illuminati')
				.setDescription('How To Jump Tutorial By illuminati')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('beginner_tutorial')
			.setDescription('Parkour Beginner Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_matarika')
				.setDescription('Parkour Beginner Tutorial By Matarika')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('intermediate')
			.setDescription('Parkour Intermediate Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_matarika')
				.setDescription('Parkour Intermediate Tutorial By Matarika')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_parkour') {
			if (command === 'by_mocucha') {
				content = 'https://youtu.be/srKOnQvXTtU?si=05HwEZJ5X_k-X30b';
			};
		};
		if (group === 'howto_jump') {
			if (command === 'by_illuminati') {
				content = 'https://youtu.be/mlbQPleanhs?si=KstaaiULSc6svcIR';
			}
		}
		if (group === 'beginner_tutorial') {
			if (command === 'by_matarika') {
				content = 'https://youtu.be/epZERvI2nCo?si=tu-WJin5lk1NdnmL';
			}
		}
		if (group === 'intermediate_tutorial') {
			if (command === 'by_matarika') {
				content = 'https://youtu.be/xY9NjXPklk4?si=V_PWY_2YA5Z1sJbp';
			}
		}
		await interaction.reply(content)
	},
};
