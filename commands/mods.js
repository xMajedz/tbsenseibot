const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('mods')
		.setDescription('Mods Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_modmaker')
			.setDescription('How To ModMaker Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To ModMaker Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_add_mods')
			.setDescription('How To Add Mods Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Add Mods Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('basic_pk_modding')
			.setDescription('Basic Parkour Modding Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_matarika')
				.setDescription('Basic Parkour Modding Tutorial By Matarika.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('weapon_joint_modding')
			.setDescription('Weapon Joint Modding Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_matarika')
				.setDescription('Weapon Joint Modding Tutorial By Matarika.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('environmental_modding')
			.setDescription('Enviromental Modding Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_matarika')
				.setDescription('Enviromental Modding Tutorial By Matarika.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_modmaker') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/NhijOHq0esw?si=mmQCr-ypEkiYgiL_';
			};
		};
		if (group === 'howto_add_mods') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/TIr8VVmIsr0?si=-vQc8TvmhDw1xovV';
			};
		};
		if (group === 'environmental_modding') {
			if (command === 'by_matarika') {
				content = 'https://youtu.be/wE36KHdL9b8?si=OLLol0csCYZoBZ2S';
			};
		};
		if (group === 'basic_pk_modding') {
			if (command === 'by_matarika') {
				content = 'https://youtu.be/ma0LH7od_-Y?si=53Z2Daexp-0q_2QJ';
			};
		};
		if (group === 'weapon_joint_modding') {
			if (command === 'by_matarika') {
				content = 'https://youtu.be/6w9a0G8PwH0?si=4CwiKyhooW3zafuO';
			};
		};
		await interaction.reply(content);
	},
};
