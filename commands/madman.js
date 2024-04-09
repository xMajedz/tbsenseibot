const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('madman')
		.setDescription('madman Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_skeet')
			.setDescription('How To Skeet Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Skeet Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_decap')
			.setDescription('How To Decap Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Decap Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_headkick')
			.setDescription('How To Head Kick Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Head Kick Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_ballkick')
			.setDescription('How To Head Ball Kick Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Ball Kick Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_twister_kick')
			.setDescription('How To Twister Kick Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Twister Kick Tutorial By Concon.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();	
		if (group === 'howto_skeet') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/gG5KC0suAIg?si=OPpfor7ZE4uWmusy';
			};
		};
		if (group === 'howto_decap') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/6ezVu0-GxrI?si=_MDf0f9BZv-pFvXW';
			};
		};
		if (group === 'howto_headkick') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/GfZuWm9xYYk?si=hRKBCkNOGySPK8qJ';
			};
		};
		if (group === 'howto_ballkick') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/BjC-iq1Lick?si=4D1tjqq0Jjx2t2gn';
			};
		};
		if (group === 'howto_twister_kick') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/1x1F87Fdp7k?si=WNThBGR7H43XkWa6';
			};
		};
		await interaction.reply(content);
	},
};
