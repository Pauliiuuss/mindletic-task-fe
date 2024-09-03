import { buildSchema } from 'graphql'

export const schema = buildSchema(`
type Psychologist {
    name: String!
    score: Float!
}

type Query {
    psychologists: [Psychologist!]!
}
`)

export const rootValue = {
  psychologists: () => [
    { name: 'Dr. John Smith', score: 4.5 },
    { name: 'Dr. Jane Doe', score: 4.2 },
    { name: 'Dr. Emily Brown', score: 4.8 },
    { name: 'Dr. Tom Green', score: 4.0 },
    { name: 'Dr. Sarah White', score: 4.7 },
  ],
}
