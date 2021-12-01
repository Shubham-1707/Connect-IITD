const { app } = require('./src')

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server listening at port ${port}`)
})

module.exports = app
