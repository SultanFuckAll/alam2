const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('message', function(message) {
	const myID = "MzMwMDEwODQ0MTk5MTI0OTky.D38I7g.5ChBaBEb1wdBlpK4ZXVcDTJ1cuU";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "changename")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('لا تلعب في حساب غيرك ياشاطر');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('ا تلعب في حساب غيرك ياشاطر');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "play")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('ا تلعب في حساب غيرك ياشاطر');
        client.user.setActivity(args, {type:'PLAYING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
    });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('ا تلعب في حساب غيرك ياشاطر');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
    });
    }
});

client.login(process.env.BOT_TOKEN);
