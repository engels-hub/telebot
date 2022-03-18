const qrcode = require('qrcode-terminal');
var insanityMeter;
const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});
const { MessageMedia } = require('whatsapp-web.js');
const media = MessageMedia.fromFilePath('./sus.png');      //PICTURE IN ROOT DIR REQUIRED



client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    
});

client.on('message', message => {
    if(insanityMeter==undefined || insanityMeter == null) insanityMeter=0;
	if(message.body === '!ping') {                  //CHANGE HERE
		message.reply('pong');                      //AND HERE
        client.sendMessage(message.from, media);
        if(insanityMeter%10==0){
        client.sendMessage(message.from, "👉🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👈🏿\n\n👉🏿👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👈🏿\n\n👉🏿👉🏾👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👇🏼👇🏼👇🏼👇🏼👇🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👉🏼👇🏻👇🏻👇🏻👈🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👉🏼👉🏻 ඞ 👈🏻👈🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👉🏼👆🏻👆🏻👆🏻👈🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👆🏼👆🏼👆🏼👆🏼👆🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👈🏾👈🏿\n\n👉🏿👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👈🏿\n\n👉🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👈🏿\n\n");
        }
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
    if(message.body === '!sus') {                //AND HERE
        client.sendMessage(message.from, "👉🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👈🏿\n\n👉🏿👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👈🏿\n\n👉🏿👉🏾👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👇🏼👇🏼👇🏼👇🏼👇🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👉🏼👇🏻👇🏻👇🏻👈🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👉🏼👉🏻 ඞ 👈🏻👈🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👉🏼👆🏻👆🏻👆🏻👈🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👆🏼👆🏼👆🏼👆🏼👆🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👈🏾👈🏿\n\n👉🏿👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👈🏿\n\n👉🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👈🏿\n\n");

	}
    console.log('InsanityMeter: '+ insanityMeter.toString());

});

client.initialize();

//👉🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👈🏿\n\n👉🏿👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👈🏿\n\n👉🏿👉🏾👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👇🏼👇🏼👇🏼👇🏼👇🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👉🏼👇🏻👇🏻👇🏻👈🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👉🏼👉🏻 ඞ 👈🏻👈🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👉🏼👆🏻👆🏻👆🏻👈🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👉🏽👆🏼👆🏼👆🏼👆🏼👆🏼👈🏽👈🏾👈🏿\n\n👉🏿👉🏾👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👆🏽👈🏾👈🏿\n\n👉🏿👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👈🏿\n\n👉🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👈🏿\n\n