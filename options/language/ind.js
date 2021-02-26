exports.wait = () => {
        return `⌛ Está em processo ⌛`
}

exports.timeEnd = () => {
        return `O tempo acabou`
}

exports.succsess = () => {
        return `✔️ Funciona ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *O comando Leveling está ativo*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *O comando Leveling está desativado*`
}

exports.levelnol = () => {
        return `*LEVEL KAKAK MASIH* 0 °-°`
}

exports.stick = () => {
        return `[❗] Falha, ocorreu um erro ao converter a imagem em um adesivo ❌`
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
        return `[❗] Este comando só pode ser usado pelo proprietário do bot! ❌`
}

exports.admin = () => {
        return `[❗] Este comando só pode ser usado por administradores de grupo! ❌`
}

exports.Badmin = () => {
        return `[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌`
}

exports.daftarB = (prefix) => {
        return `──「 BELUM REGISTER 」──\nHalo kak !\nKamu belum Register nih, register dulu yuk... \n\nCommand : ${prefix}register nama|umur\nContoh : ${prefix}register Nazwa|16`
}

exports.daftarD = () => {
        return `*「 SUDAH REGISTER 」*\n\n*kamu sudah register di database bot*`
}

exports.wrongf = () => {
        return`*formato incorreto/enviar texto vazio*`
}

exports.clears = () => {
        return`*clear all Success*`
}

exports.pc = () => {
        return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 DATA DE REGISTRO 」*\n\nVocê se registrou com os dados \n\n◪ *DATA* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Número : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${umurUser} \n  ├─ ❏ Tempo de registro : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTE : \n NÃO ESQUEÇA ESTE NÚMERO PORQUE É IMPORTANTE:v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*maaf tapi ${pushname} bukan owner script*`
}

exports.limitend = (pushname) => {
        return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
        return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nama* : ${pushname}\n  ❏ *Nomer* : ${sender.split("@")[0]}\n  ❏ *Uang* : ${uangkau}`
}
