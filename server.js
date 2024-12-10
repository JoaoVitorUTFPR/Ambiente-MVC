const express = require('express');
const path = require('path');
const app = express();

// Configuração do EJS como motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
const homeRoutes = require('./routes/homeRoutes');
app.use('/', homeRoutes);

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
