const kerang = (prefix, botName, ownerName) => {
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
┷┯ *〈 CARTUCHOS MARAVILHOSOS 〉*
   ╽
   ┠≽ *${prefix}apakah* <opcional>
   ┃ *Desc* : Perguntar é
   ┠──────────────╼
   ┠≽ *${prefix}bisakah* <opcional>
   ┃ *Desc* : Perguntar pode
   ┠──────────────╼
   ┠≽ *${prefix}kapankah* <opcional>
   ┃ *Desc* : Pergunte quando
   ┠──────────────╼
   ┠≽ *${prefix}watak*
   ┃ *Desc* : Transmitindo personagens ao acaso
   ┠──────────────╼
   ┠≽ *${prefix}hobby*
   ┃ *Desc* : Envio aleatório de hobbies
   ┠──────────────╼
   ┠≽ *${prefix}gantengcek*
   ┃ *Desc* : Quão bonito
   ┠──────────────╼
   ┠≽ *${prefix}cantikcek*
   ┃ *Desc* : Que bonito
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.kerang = kerang
