const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('items')
		.setDescription('Items Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_add_sounds')
			.setDescription('How To Add Sounds Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Add Sounds Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_change_textures')
			.setDescription('How To Change Textures Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Change TexturesTutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_spending')
			.setDescription('How To Spending Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Spending Tutorial By Concon.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_add_sounds') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/cbEX9blXYf4?si=bo7dumuowbRq-kjk';
			};
		};
		if (group === 'howto_change_textures') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/go_I23Mt-68?si=TFxiSd6HxeIF1SPV';
			};
		};
		if (group === 'howto_spending') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/b70TnwTdHIY?si=37iIKFN7boum2tFQ';
			};
		};
		await interaction.reply(content);
	},
};
