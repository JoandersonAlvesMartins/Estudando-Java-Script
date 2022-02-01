// Map função getAdmin
// Criar uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN no sistema
function getAdmin(map) {
    let  admins = [];

    // passando chave e valor dentro do for of map
    for([key,value] of map) {
        if (value === 'Admin') {
            admins.push(`Adminstrador(es): ${key}`);
        }
    }
    return admins;
}

// usuários
function getUsuario(map) {
    let  usuario = [];

    // passando chave e valor dentro do for of map
    for([key,value] of map) {
        if (value === 'User') {
            usuario.push(`Usuário(s) Sistema(s): ${key}`);
        }
    }
    return usuario;
}

// retorno da função
const usuarios = new Map();

// lista de usuários
usuarios.set('Stephany', 'User');
usuarios.set('Joanderson', 'Admin');
usuarios.set('Joan', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Amelie', 'Admin');
usuarios.set('Luiz', 'User');

console.log(getAdmin(usuarios));
console.log(getUsuario(usuarios));