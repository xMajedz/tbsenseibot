const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('sparring')
		.setDescription('Sparring Tutorials.')
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('howto_spar')
			.setDescription('How To Spar Tutorial.')
			.addSubcommand(subcommand =>
				subcommand.setName('by_mocucha')
				.setDescription('How To Spar Tutorial By Mocucha.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('styles')
			.setDescription('Sparring Styles Tutorial.')
			.addSubcommand(subcommand =>
				subcommand.setName('by_matarika')
				.setDescription('Sparring Styles Tutorial By Matarika.')
			)
		)
		.addSubcommandGroup(subcommandgroup =>
			subcommandgroup.setName('flow')
			.setDescription('Sparring Flow Tutorial.')
			.addSubcommand(subcommand =>
				subcommand.setName('by_matarika')
				.setDescription('Sparring Flow Tutorial By Matarika.')
			)
		),
	async execute(interaction) {
		let content = '';
		const group = interaction.options.getSubcommandGroup();
		const command = interaction.options.getSubcommand();
		if (group === 'howto_spar') { 
			if (command === 'by_mocucha') { 
				content = 'https://youtu.be/9CDGyUwwTs8?si=s5rI8re3IcRBd5zM';
			};
		};
		if (group === 'styles') { 
			if (command === 'by_matarika') { 
				content = 'https://youtu.be/02w_DKFN13A?si=ysI1ksbiOn31TQUQ';
			};
		};
		if (group === 'flow') { 
			if (command === 'by_matarika') { 
				content = 'https://youtu.be/sHJnu2exzxc?si=c2GWEOFOstXKxepc';
			};
		};
		await interaction.reply(content);
	},
};
