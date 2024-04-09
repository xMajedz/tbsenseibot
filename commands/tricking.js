const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('tricking')
		.setDescription('Tricking Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_trick')
			.setDescription('How To Trick Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Trick Tutorial By Concon.')
			)
			.setDescription('How To Trick Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_mocucha')
				.setDescription('How To Trick Tutorial By Mocucha.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_trick_2')
			.setDescription('How To Trick 2 Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Trick 2 Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_flip')
			.setDescription('How To Flip Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Flip Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_backflip')
			.setDescription('How To Backflip Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_jagger')
				.setDescription('How To BackflipTutorial By Jagger.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_cork')
			.setDescription('How To Cork Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_jagger')
				.setDescription('How To Cork Tutorial By Jagger.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_720')
			.setDescription('How To 720 Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_jagger')
				.setDescription('How To 720 Tutorial By Jagger.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('cheat_720')
			.setDescription('Cheat 720 Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_jagger')
				.setDescription('Cheat 720 Tutorial By Jagger.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('dub_cork')
			.setDescription('Dub Cork Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_jagger')
				.setDescription('Dub Cork Tutorial By Jagger.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_trick') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/RHBRIkjlIVw?si=lO5RZj8g8Ro502yi';
			};
			if (command === 'by_mocucha') {
				content = 'https://youtu.be/nuFkHc8V6Qk?si=0hdq7FTswfvth0aP';
			};
		};
		if (group === 'howto_trick_2') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/EY0bBf55Pjw?si=0mZxhmDWwLiXwo6Z';
			};
		};
		if (group === 'howto_flip') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/c7PFVQ7JTSc?si=__STjn64qvYJzbVI';
			};
		};
		if (group === 'howto_backflip') {
			if (command === 'by_jagger') {
				content = 'https://youtu.be/GDGOijyZzVc?si=--kGN8pVu-NO2ld6';
			};
		};
		if (group === 'howto_cork') {
			if (command === 'by_jagger') {
				content = 'https://youtu.be/d0-tXjU4_sc?si=VdF_aFo0t7ZRby-c';
			};
		};
		if (group === 'howto_720') {
			if (command === 'by_jagger') {
				content = 'https://youtu.be/zky70Tx1DTI?si=p2iJ6c59sXiPscmj';
			};
		};
		if (group === 'cheat_720') {
			if (command === 'by_jagger') {
				content = 'https://youtu.be/3ajXGgzoTjo?si=4ZmYLFMxiXfopJ-C';
			};
		};
		if (group === 'dub_cork') {
			if (command === 'by_jagger') {
				content = 'https://youtu.be/RQcUg0geqdg?si=_EW2HRI8P5PGW7fV';
			};
		};
		await interaction.reply(content);
	},
};
