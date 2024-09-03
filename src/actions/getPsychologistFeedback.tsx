'use server'

export interface Feedback {
  score: number
  text: string
}

export interface PsychologistFeedback {
  name: string
  feedback: Feedback[]
}

export const getPsychologistsFeedback = async (): Promise<{
  psychologists: PsychologistFeedback[]
}> => {
  const query = `
    query {
      psychologists {
        name
        feedback {
          score
          text
        }
      }
    }
  `

  // Fetch data from the internal GraphQL API route
  const res = await fetch(`http://localhost:3000/api/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  })

  const data: { data: { psychologists: PsychologistFeedback[] } } =
    await res.json()
  return data.data
}
