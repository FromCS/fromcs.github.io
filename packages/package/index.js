const app = require ('fastify') ({
  logger:true
})
app.register(require('fastify-cors'))

app.get('/', async (request, response) => ({hello: 'world'}) )
app.listen(3000, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
