const errorHandler = (err, req, res, next) => {
  console.error(`Error detected: ${err.message}`);
  res.status(500).json({
    sucesso: false,
    mensagem: 'Ocorreu um erro no servidor.',
    detalhes: err.message
  });
};

module.exports = errorHandlerMiddleware;

