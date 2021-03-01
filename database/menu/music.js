const music = (prefix, botName, ownerName) => {
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
┷┯ *〈 MÚSICA 〉*
   ╽
   ┠≽ *${prefix}play* <nome_da_musica>
   ┃ *Desc* : Tocar música de áudio
   ┠──────────────╼
   ┠≽ *${prefix}joox* <nome_da_musica>
   ┃ *Desc* : Tocar música Joox
   ┠──────────────╼
   ┠≽ *${prefix}lirik* <nome_da_musica>
   ┃ *Desc* : Pesquisar música Lyrics
   ┠──────────────╼
   ┠≽ *${prefix}chord* <nome_da_musica>
   ┃ *Desc* : Procurar Chord Música Lyrics
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.music = music
