const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('general')
		.setDescription('General Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_punch')
			.setDescription('How To Punch Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Punch Tutorial By Concon.')
			)	
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_milo')
				.setDescription('How To Punch Tutorial By milo.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_relax')
			.setDescription('How To Relax Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Relax Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_run')
			.setDescription('How To Run Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Run Tutorial By Concon.')
			)
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_biscut324')
				.setDescription('How To Run Tutorial By biscut324.')
			)
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_arcanetubby')
				.setDescription('How To Run Tutorial By arcanetubby.')
			)
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_illuminati')
				.setDescription('How To Run Tutorial By illuminati.')
			)
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_unseendead')
				.setDescription('How To Run Tutorial By unseendead.')
			)
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_theforgetful')
				.setDescription('How To Run Tutorial By theforgetful.')
			)
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_arcadecrowd')
				.setDescription('How To Run Tutorial By arcadecrowd.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_run_2')
			.setDescription('How To Run Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Run Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_run_movememory')
			.setDescription('How To Run MoveMemory Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('How To Run MoveMemory Tutorial By Concon.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('how_to_be_pro')
			.setDescription('How To Be Pro Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_matarika')
				.setDescription('How To Be Pro Tutorial By Matarika.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('how_to_be_pro_2')
			.setDescription('How To Be Pro 2 Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_matarika')
				.setDescription('How To Be Pro 2 Tutorial By Matarika.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('how_to_balance')
			.setDescription('How To Balance Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_matarika')
				.setDescription('How To Balance Tutorial By Matarika.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_realism')
			.setDescription('How To Realism Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_mocucha')
				.setDescription('How To Realism Tutorial By Mocucha.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('quick_tips_1')
			.setDescription('Quick Tips 1.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_matarika')
				.setDescription('Quick Tips 1 By Matarika.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('joint_movement')
			.setDescription('Joint Movement Tutorial.')
			.addSubcommand(subsubsubcommand =>
				subsubsubcommand.setName('by_concon')
				.setDescription('Joint Movement Tutorial By Concon.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_punch') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/TnwsNd2aRAo?si=Q5QBV1KjhB2EJO7O';
			};
			if (command === 'by_milo') {
				content = 'https://youtu.be/4CkWQSibs3g?si=AxVEk36XxXF0169E';
			};
		};
		if (group === 'howto_relax') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/fXQUvVyE2Xs?si=PNSRWrbME2AX20SC';
			};
		};
		if (group === 'howto_run') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/QwBS8X7opKU?si=7GFmunzh_lGxPUKu';
			};
			if (command === 'by_biscut324') {
				content = 'https://youtu.be/pH_PwMONnWA?si=OA5xNo6gkYFvtPpe';
			};
			if (command === 'by_arcanetubby') {
				content = 'https://youtu.be/h5lLxQHOlKE?si=GF_HaP2ubA6U_SsP';
			};
			if (command === 'by_illuminati') {
				content = 'https://youtu.be/tCTtvelU-EE?si=WYeBeloRFjMRSLMd';
			};
			if (command === 'by_unseendead') {
				content = 'https://youtu.be/NGQjxGNPl9s?si=jOXWQOxeHNHlJ12f';
			};
			if (command === 'by_theforgetful') {
				content = 'https://youtu.be/h_mYNeNT0N0?si=oEZCA5Bx1b94sCRM';
			};
			if (command === 'by_arcadecrowd') {
				content = 'https://youtu.be/ymAaNEw3YV0?si=QjAbLB8-SYGCIeLQ';
			};
		};
		if (group === 'howto_run_2') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/zQOl1j-y0yw?si=NLCCQMx7rxWCj2or';
			};
		};
		if (group === 'howto_run_movememory') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/_8_biTS69v0?si=oaznREYDkO8_wWmU';
			};
		};
		if (group === 'how_to_be_pro') {
			if (command === 'by_matarika') {
				content = 'https://youtu.be/LkupTmO7oWo?si=GBrUVkSKQnwVfiES';
			};
		};
		if (group === 'how_to_be_pro_2') {
			if (command === 'by_matarika') {
				content = 'https://youtu.be/Nj1nPpldofE?si=B5IVSPXyqJW7pUFd';
			};
		};
		if (group === 'how_to_balance') {
			if (command === 'by_matarika') {
				content = 'https://youtu.be/xfCPN5scDu8?si=FB39a-JoT4Dcgdkf';
			};
		};
		if (group === 'howto_realism') {
			if (command === 'by_mocucha') {
				content = 'https://youtu.be/t22nLeVCeTM?si=EAX282mXERGCHuI-';
			};
		};
		if (group === 'joint_movement') {
			if (command === 'by_concon') {
				content = 'https://youtu.be/A17R-2RtDTs?si=dmK3R5fopeDbOIqU';
			};
		};
		if (group === 'quick_tips_1') {
			if (command === 'by_matarika') {
				content = 'https://youtube.com/shorts/CT5rgDnK4oY?si=lm1ouMNbA7HnLvzK';
			};
		};
		await interaction.reply(content);
	},
};
