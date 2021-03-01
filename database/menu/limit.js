const limit = (prefix, botName, ownerName) => {
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
┷┯ *〈 LIMITE〉*
   ╽
   ┠≽ *${prefix}limit*
   ┃ *Desc* : Verifique o seu limite
   ┠──────────────╼
   ┠≽ *${prefix}bal*
   ┃ Verifique o seu dinheiro
   ┠──────────────╼
   ┠≽ *${prefix}buylimit* <count>
   ┃ *Desc* : Limite de compra
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Anotação: Você pode comprar limites recolhendo dinheiro primeiro. Verifique seu dinheiro digitando comandos *${prefix}bal* , preço 1 limite = 1000 dinheiro.
Anotação 2: Você pode coletar dinheiro conversando com amigos do grupo ou subindo de nível.`
}
exports.limit = limit
