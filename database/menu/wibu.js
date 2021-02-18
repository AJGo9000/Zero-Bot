const wibu = (prefix, botName, ownerName) => {
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
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 WEEBOO 〉*
   ╽
   ┠≽ *${prefix}neonime*
   ┃ *Desc* : Procurar Neonime
   ┠──────────────╼
   ┠≽ *${prefix}pokemon*
   ┃ *Desc* : Imagem aleatória de Pokemon
   ┠──────────────╼
   ┠≽ *${prefix}loli*
   ┃ *Desc* : Imagem aleatória de Loli
   ┠──────────────╼
   ┠≽ *${prefix}waifu*
   ┃ *Desc* : Imagem aleatória de Waifu
   ┠──────────────╼
   ┠≽ *${prefix}randomanime*
   ┃ *Desc* : Imagem aleatória de Anime
   ┠──────────────╼
   ┠≽ *${prefix}husbu*
   ┃ *Desc* : Imagem aleatória de Husbu
   ┠──────────────╼
   ┠≽ *${prefix}husbu2*
   ┃ *Desc* : Imagem aleatória de Husbu2
   ┠──────────────╼
   ┠≽ *${prefix}wait*
   ┃ *Desc* : Enviar nome de anime & Cena curta
   ┠──────────────╼
   ┠≽ *${prefix}nekonime*
   ┃ *Desc* : Imagem aleatória de Nekonime
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.wibu = wibu
