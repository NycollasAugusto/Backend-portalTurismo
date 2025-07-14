// Importa a instância do Sequelize configurada e o modelo de usuário
const sequelize = require('./config/db');
const User = require('./models/users');
 
(async () => {
  try {
 
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
 
 
    await sequelize.sync({ force: true });
    console.log("Banco sincronizado com sucesso!");
 
 
    const novoUsuario = await User.create({
      name: 'Maria da Silva',
      email: 'maria@email.com',
      password: 'senha123'
    });
 
 
    console.log("Usuário cadastrado com sucesso!", novoUsuario.toJSON());
 
  } catch (erro) {
 
    console.error("Erro ao se conectar com o banco de dados:", erro);
  } finally {
   
    await sequelize.close();
  }
})();
 
 