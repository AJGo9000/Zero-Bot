const other = (prefix, botName, ownerName) => {
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
┷┯ *〈 OUTROS 〉*
   ╽
   ┠≽ *${prefix}kiss*
   ┃ *Desc* : Dê um beijo em alguém
   ┠≽*${prefix}dono*
   ┠≽ *${prefix}send*
   ┠≽ *${prefix}wame*
   ┠≽ *${prefix}virtex*
   ┠≽ *${prefix}qrcode* <texto>
   ┠≽ *${prefix}timer*
   ┠≽ *${prefix}fml*
   ┠≽ *${prefix}fml2*
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.other = other
