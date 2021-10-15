const app = require ('fastify') ({
  logger:true
})

app.get('/', function (req, reply) {
  reply.send({hello: 'world'})
})
app.listen(3000, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
