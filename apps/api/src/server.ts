import { resolve } from 'path'
import { GraphQLServer } from 'graphql-yoga'

const typeDefs = resolve(__dirname, 'schema.graphql')

const USERS = [
    { id: 1, name: 'Joao da Silva', email: 'joaodasilva@gmail.com' },
    { id: 2, name: 'Maria de Souza', email: 'mariadesouza@gmail.com' }
]

const resolvers = {
    Query: {
        users: () => USERS
    },

    Mutation: {
        createUser: (parent, args, ctx, info) => {
            console.log('args:', args)
            const { data } = args
            const user = {
                ...data,
                id: USERS.length + 1
            }
            USERS.push(user)
            return user
        }
    }
}

const server = new GraphQLServer({
    resolvers,
    typeDefs,
})

export default server