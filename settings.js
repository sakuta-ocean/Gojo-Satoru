//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['966576500382']
global.premium = ['966576500382']
global.ownernomer = '966576500382'
global.ownername = '( الـمـطـور )'
global.botname = '( بـوت ريودو )'
global.footer = '( ريودو )'
global.ig = ''
global.region = 'India, South India, Kerala'
global.sc = 'https://chat.whatsapp.com/CTNPgNrr6DZIFbOUIwjQmi'
global.myweb = 'https://www.youtube.com/channel/UCdCMQuPNFYLOI7bfr4tgAxw'
global.packname = '𝑂𝑐𝑒𝑎𝑛 𝑆𝑎𝑘𝑢𝑡𝑎 𓅓♕╎ 🌊'
global.author = '[ ساكوتا ]'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓',
    admin: '*「 امر خاص بالمشرفين ما يمديك تستخدمه للاسف 」◣*',
    botAdmin: '*「 عطيني اشراف واسويلك الامر 」◣*',
    owner: '*「 الامر هذا خاص بالمطور بس 」◣*',
    group: '*「 الامر ذا بس في القروبات 」◣*',
    private: '*「 الامر ذا في الخاص بس 」◣*',
    bot: '*「 الاكر ذا خاص بالبوت بس 」◣*',
    wait: '*「 استنى شوي بس 」◣*',
    error: 'خطا انتهت الصلاحية',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 1000 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
