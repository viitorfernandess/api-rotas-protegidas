module.exports = {
    //GET /welcome
    welcome: (req, res) => {
        // Se o usuário estiver logado → pega o nome dele
        // Se não → mostra "visitante"
        const displayName = req.authenticatedUser?.name ?? 'visitante'
        res.json({ message: `Seja bem-vindo(a), ${displayName}` })
    }
}