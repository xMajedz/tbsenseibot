const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('aikido')
		.setDescription('Aikido Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_aikido')
			.setDescription('How To Aikido Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Aikido Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_abd')
			.setDescription('How To ABD Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To ABD Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_snapkick')
			.setDescription('How To Snap Kick Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Snap Kick Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_kick_movememory')
			.setDescription('How To Kick MoveMemory Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Kick MoveMemory Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_aikido_tackle')
			.setDescription('How To Aikido Tackle Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_rakuushi')
				.setDescription('howto_aikido_tackle Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_knee')
			.setDescription('How To Knee Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Kick MoveMemory Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('fight_yourself')
			.setDescription('Fight Yourself Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('Fight Yourself Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('attacking_uke')
			.setDescription('Attacking Uke Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('Attacking Uke Tutorial By Concon.')
			)
		),
	async execute(interaction) {
		let content = ''
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'attacking_uke') {
			if (command === 'by_concon') { 
				content = 'https://youtu.be/Jj_s8G6j75Y?si=cN4D_a76HgSlnsJK';
			}
		}
		if (group === 'fight_yourself') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/4rNWX0mcjng?si=NVGw8UlQIS5Nlsiw';
			}
		}
		if (group === 'howto_aikido') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/IlmOmMIt1YU?si=l9k6KGsA2MOw5E5H';
			}
		}
		if (group === 'howto_abd') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/Gfl9cOcxxZI?si=qWW4SDzzTpSTndea';
			}
		}
		if (group === 'howto_snapkick') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/TpK2wLttaKw?si=mxuagS3m9RtVg8dH';
			}
		}
		if (group === 'howto_kick_movememory') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/czojqUjr7lg?si=CKOJd05qWgoUHhvc';
			}
		}
		if (group === 'howto_knee') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/79gZrTPXiQ0?si=0RoOdxk8OtHfRk6z';
			}
		}
		if (group === 'howto_aikido_tackle') {
			if (command === 'by_rakuushi') {
				content = 'https://youtu.be/YgAfO_DAvLc?si=8mjpqEToEFoQk1VO';
			}
		}
		await interaction.reply(content);
	},
};
