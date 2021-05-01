require('dotenv').config();
const fetch = require('node-fetch');
const Discord = require('discord.js');

const URL = 'https://pokeapi.co/api/v2/pokemon';

const bot = new Discord.Client();

bot.on('ready', () => {
	console.log('Bot is up and running!');
});

bot.on('message', async (message) => {
	if (message.content.startsWith('pokemon')) {
		const messageArray = message.content.split(' ');
		const result = await fetch(URL + `/${messageArray[1]}`);
		const data = await result.json();
		const helpEmbedd = new Discord.MessageEmbed()
			.setTitle(`Name: ${data.name}`)
			.setImage(`${data.sprites.front_default}`);
		message.reply(helpEmbedd);
	}
});

bot.login(`${process.env.BOT_TOKEN}`);
