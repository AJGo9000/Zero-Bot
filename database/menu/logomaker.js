const logomaker = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 INFORMAÇÕES DO BOT 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostrar detalhes do bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuário bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todos os usuários de bate-papo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidade do bot de conexão
┠──────────────╼
┠≽ *${prefix}bugreport* <texto>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 LOGO MAKER 〉*
   ╽
   ┠≽ *${prefix}ninjalogo* <texto|texto>
   ┃ *Desc* : Logotipo da Make Ninja
   ┠──────────────╼
   ┠≽ *${prefix}logowolf* <texto|texto>
   ┃ *Desc* : Make Wolf Logo
   ┠──────────────╼
   ┠≽ *${prefix}logowolf2* <texto|texto>
   ┃ *Desc* : Make Wolf Logo2
   ┠──────────────╼
   ┠≽ *${prefix}phlogo* <texto|texto>
   ┃ *Desc* : Make PornHub Logo
   ┠──────────────╼
   ┠≽ *${prefix}neonlogo* <texto>
   ┃ *Desc* : Make Neon Logo
   ┠──────────────╼
   ┠≽ *${prefix}neonlogo2* <texto>
   ┃ *Desc* : Make Neon Logo2
   ┠──────────────╼
   ┠≽ *${prefix}lionlogo* <texto|texto>
   ┃ *Desc* : Make Lion Logo
   ┠──────────────╼
   ┠≽ *${prefix}jokerlogo* <texto>
   ┃ *Desc* : Make Joker Logo
   ┠──────────────╼
   ┠≽ *${prefix}pubglogo* <texto|texto>
   ┃ *Desc* : Make PUBG Logo
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.logomaker = logomaker
