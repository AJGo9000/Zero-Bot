const stickermaker = (prefix, botName, ownerName) => {
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
┃ *Desc* : Mostrar Detalhes Do Bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar Usuário Bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar Todos Os Usuários Do Bate-papo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar Velocidade Do Bot De Conexão
┠──────────────╼
┠≽ *${prefix}bugreport* <texto>
┃ *Desc* : Reportar Bug ao Proprietário Do Bot
╿
┷┯ *〈 STICKER MAKER 〉*
   ╽
   ┠≽ *${prefix}sticker*
   ┃ *Desc* : Faça Uma Imagem De Adesivo
   ┠──────────────╼
   ┠≽ *${prefix}stickergif*
   ┃ *Desc* : Crie Um Gif/Vídeo De Adesivo
   ┠──────────────╼
   ┠≽ *${prefix}ttp*
   ┃ *Desc* : Texto para adesivo
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.stickermaker = stickermaker
