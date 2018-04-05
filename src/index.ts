import app from './app'
import setupDb from './db'

const port = process.env.PORT || 4444


setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
  })
  .catch(err => console.error(err))
