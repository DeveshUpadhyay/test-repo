const { Client, Intents, DiscordAPIError } = require('discord.js');
const config = require('./data/config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
// , Intents.FLAGS.GUILD_MEMBERS     //disallowwed intents

const TOKEN = "ODczNDczNjM3MzMwNjA0MDMz.YQ47tw.Eg7LtWk60sNOKkQ-2Q21q8G4NCU";

// let CS=message.guild.roles.cache.find(role => role.name === "Computer Engineering");;
// let IT=message.guild.roles.cache.find(role => role.name === "Information Technology");;

// let SEMESTER1=message.guild.roles.cache.find(role => role.name === "Semester 1");
// let SEMESTER2=message.guild.roles.cache.find(role => role.name === "Semester 2");
// let SEMESTER3=message.guild.roles.cache.find(role => role.name === "Semester 3");
// let SEMESTER4=message.guild.roles.cache.find(role => role.name === "Semester 4");
// let SEMESTER5=message.guild.roles.cache.find(role => role.name === "Semester 5");
// let SEMESTER6=message.guild.roles.cache.find(role => role.name === "Semester 6");
// let SEMESTER7=message.guild.roles.cache.find(role => role.name === "Semester 7");
// let SEMESTER8=message.guild.roles.cache.find(role => role.name === "Semester 8");



client.once('ready', () => {
	// console.log("Logged in as "+client.user.tag+"!!");
	console.log(`Logged in as ${client.user.tag}!!`)
});

client.on('messageCreate', (message) => {

	if(message.content == 'cs'){
		// console.log(message.guild.roles.cache);
		let myRole=message.guild.roles.cache.find(role => role.name === "Semester 2");
		console.log(myRole.id);
		message.reply("world");
		// console.log('message!');
	}

	if(message.content == '1' ||message.content == '2' ||message.content == '3' ||message.content == '4' ||message.content == '5' ||message.content == '6' ||message.content == '7' ||message.content == '8' ){
		var sem=message.content;
		console.log(sem);
	}
	
	if(message.content == '!change Sem'){
		message.reply('Enter New Semester Number')
		console.log(sem);
	}

	
})
// client.on("userUpdate").catch(console.error);


client.login(config.TOKEN);