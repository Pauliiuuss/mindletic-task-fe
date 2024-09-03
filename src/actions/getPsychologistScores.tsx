'use server'

export interface Psychologist {
  name: string
  score: number
}

export const getPsychologists = async (): Promise<{
  psychologists: Psychologist[]
}> => {
  const query = `
    query {
      psychologists {
        name
        score
      }
    }
  `

  // Fetch data from the internal GraphQL API route
  const res = await fetch(`http://localhost:3000/api/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  })

  const data: { data: { psychologists: Psychologist[] } } = await res.json()
  return data.data
}
