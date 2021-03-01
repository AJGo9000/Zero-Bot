const search = (prefix, botName, ownerName) => {
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
┷┯ *〈 PROCURAR 〉*
   ╽
   ┠≽ *${prefix}wait
   ┃ *Desc* : Enviar Nome Anime & Cena Curta
   ┠──────────────╼
   ┠≽ *${prefix}ytsearch <consulta>
   ┃ *Desc* : Pesquisar vídeo no YouTube
   ┠──────────────╼
   ┠≽ *${prefix}trendtwit
   ┃ *Desc* : Vídeo de tendências de pesquisa no Twitter
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.search = search
