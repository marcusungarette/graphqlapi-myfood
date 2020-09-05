import server from './server'

const { PORT: port = 4001 } = process.env

const main = async (): Promise<void> => {
  await server.start({ port })
  console.log(`Listening at port ${port}...`)
}

main().catch(console.log)
