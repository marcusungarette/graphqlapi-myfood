import { resolve } from 'path'
import { GraphQLServer } from 'graphql-yoga'

const typeDefs = resolve(__dirname, 'schema.graphql')

const USERS = [
    { id: 1, name: 'Joao da Silva' },
    { id: 2, name: 'Maria de Souza' }
]

const resolvers = {
    Query: {
        users: () => USERS
    }
}

const server = new GraphQLServer({
    resolvers,
    typeDefs,
})

export default server