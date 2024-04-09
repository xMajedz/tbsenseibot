const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('wushu')
		.setDescription('Wushu Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_openers')
			.setDescription('How To Openers Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_orionfr')
				.setDescription('How To Openers Tutorial By orionfr.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_openers') {
			if (command === 'by_orionfr') {
				content = 'https://youtu.be/o1rxBmsGe1A?si=Wzh0-ugm0cjNE1pn';
			};
		};
		await interaction.reply(content);
	},
};
