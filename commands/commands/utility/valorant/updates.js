const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
    commands: ['valupdates', 'valpatches'],
    callback: (message, args) => {
        axios.get(`https://api.henrikdev.xyz/valorant/v1/website/en-us?filter=game_updates`)
            .then(function (response) {
                const embed = new Discord.MessageEmbed()
                .setTitle('Valorant Updates')
                .setDescription("Here Are The Latest Valorant Updates!")
                .addField(response.data.data[0].title, response.data.data[0].url)
                .addField(response.data.data[1].title, response.data.data[1].url)
                .addField(response.data.data[2].title, response.data.data[2].url)
                .setThumbnail(response.data.data[0].banner_url)
                .setColor('RANDOM')
                .setFooter("Bot Made By OblivionGhoul#5842", "https://i.imgur.com/Ivtf7GP.png")
                message.channel.send(embed)
            })
            .catch(function (error) {
                message.channel.send('Something went wrong, please try again later.')
            })
    },
}