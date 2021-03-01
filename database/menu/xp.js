const xp = (prefix, botName, ownerName) => {
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
┷┯ *〈 LEVEL 〉*
   ╽
   ┠≽ *${prefix}level*
   ┃ *Desc* : Verifique o seu level
   ┠──────────────╼
   ┠≽ *${prefix}leveling* <1/0>
   ┃ *Desc* : Possibilitando / Desativando recursos de leveling
   ┠──────────────╼
   ┠≽ *${prefix}mining*
   ┃ *Desc* : Mineração XP
   ┠──────────────╼
   ┠≽ *${prefix}event* <1/0>
   ┃ *Desc* : Possibilitando / Desativando recursos de evento
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Observação: Você pode coletar XP e aumentar seu nível conversando com qualquer pessoa do grupo que tenha ativado o recurso de leveling.`
}
exports.xp = xp
