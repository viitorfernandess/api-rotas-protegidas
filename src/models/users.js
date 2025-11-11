const users = [ 
    { id: '1', name: 'Vitor', email: 'vitor@email.com', password: '123456', role: 'admin' }
]

module.exports = {
    findAll: () => users,

    findById: (id) => users.find(user => user.id === id),

    findByEmail: (email) => users.find(user => user.email === email),

    
}