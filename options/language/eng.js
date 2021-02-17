exports.wait = () => {
        return `⌛ Espere Um Pouco Meu Amigo ⌛`
}

exports.timeEnd = () => {
        return `O tempo acabou`
}

exports.succsess = () => {
        return `✔️ Sucesso ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *O comando leveling foi Ativo*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *O comando leveling foi Desativado*`
}

exports.levelnol = () => {
        return `*SEU NÍVEL AINDA* 0 °-°`
}

exports.stick = () => {
        return `[❗] falhou, ocorreu um erro ao converter a imagem em um adesivo ❌`
}

exports.Iv = () => {
        return `❌ Link inválido ❌`
}

exports.group = () => {
        return `[❗] Este comando só pode ser usado em grupos! ❌`
}

exports.ownerG = () => {
        return `[❗] Este comando só pode ser usado pelo grupo proprietário! ❌`
}

exports.ownerB = () => {
        return `[❗] Este comando só pode ser usado pelo bot proprietário! ❌`
}

exports.admin = () => {
        return `[❗] Este comando só pode ser usado por administradores de grupo! ❌`
}

exports.Badmin = () => {
        return `[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌`
}

exports.daftarB = (prefix) => {
        return `──「 AINDA NÃO REGISTRADO 」──\nOla mano !\nVocê ainda não se inscreveu, vamos registrar primeiro ... \n\nComando : ${prefix}register nome|idade\nExample : ${prefix}register Zero|15`
}

exports.daftarD = () => {
        return `*「 JÁ SE REGISTROU 」*\n\n*você se registrou no banco de dados do bot*`
}

exports.wrongf = () => {
        return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
        return`*limpar tudo, sucesso*`
}

exports.pc = () => {
        return`*「 CADASTRO 」*\n\nse você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (nomeUser, idadeUser, serialUser, tempo, sender) => {
        return`*「 REGISTRAR DADOS 」*\n\nvocê se registrou com os dados \n\n◪ *DATA* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Número : wa.me/${sender.split("@")[0]} \n  ├─ ❏ idade : ${umurUser} \n  ├─ ❏ Tempo de Registro : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ ANOTAÇÃO : NÃO ESQUEÇA ESTE NÚMERO PORQUE É IMPORTANTE :v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* não encontrado \ try to write *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*sorry but ${pushname} esse e o script do dono;-;*`
}

exports.limitend = (pushname) => {
        return`*sorry ${pushname} O limite de hoje aumentou*\n*O limite é redefinido a cada 00:00 horas*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
o resto do seu limite : ${limitCounts}

ANOTAÇÃO : para chegar ao limite. pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
        return`*Adicionar parâmetros 1 (enable) or 0 (disable)`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *SALDO*\n  ❏ *Nome* : ${pushname}\n  ❏ *Número* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}
