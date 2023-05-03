const server = require('./server')

// Local port config
const port = 3000 || 8080

// Listen to port
server.listen(port, (err) => {
  if (err) {
    console.log('Not connected to port successfully')

    // try-catch when server is not connected
    try {
      if (port.valueOf == null) {
        console.log('Port needs to be specified')
      } else {
        //
      }
    } catch (error) {
      console.log(`Error ${error} was caught while listening to port`)
    }
  } else {
    console.log(`Server is listening on port ${port}`)
  }
})
