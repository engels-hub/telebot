const qrcode = require('qrcode-terminal');
var insanityMeter=20;
const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});
const { MessageMedia } = require('whatsapp-web.js');
const media = MessageMedia.fromFilePath('./insanity.jpg');      //PICTURE IN ROOT DIR REQUIRED



client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	if(message.body === '!ping') {                  //CHANGE HERE
		message.reply('pong');                      //AND HERE
        client.sendMessage(message.from, media);
        insanityMeter++;
        if(insanityMeter>9000)message.reply("ITS OVER (-)9000!!!!");
        if(insanityMeter==69)message.reply("69, nice");
        if(insanityMeter==100)message.reply("100, flawless");
        if(insanityMeter==420)message.reply("420, niiice");
        if(insanityMeter==1000)message.reply("1000, 1/9");
        if(insanityMeter==2000)message.reply("2000, 2/9");
	}
    if(message.body === '!sanity') {                //AND HERE
        message.reply("your sanity meter is: -"+insanityMeter.toString());
        if(insanityMeter>9000)message.reply("ITS OVER (-)9000!!!!");
        if(insanityMeter>=69)message.reply("69, nice");
        if(insanityMeter>=100)message.reply("100, flawless");
        if(insanityMeter>=420)message.reply("420, niiice");
        if(insanityMeter>=1000)message.reply("1000, 1/9");
	}
    console.log('InsanityMeter: '+ insanityMeter.toString());

});

client.initialize();