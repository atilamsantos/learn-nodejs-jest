# Implementar uma webapi e efetuar testes E2E

# Dependencias
```npm install -D nodemon```
```npm install -D jest```
```npm install -D cross-env```
```npm install -D supertest```

# Configurando Jest
Para configurar o Jest necessário executar o comando
```npx jest --init```
Alterando o script de teste no *package.json*
```cross-env NODE_OPTIONS='--experimental-vm-modules' jest --watchAll```

# Rodando testes:
```npm t```