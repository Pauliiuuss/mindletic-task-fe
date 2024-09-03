import { buildSchema } from 'graphql'

export const schema = buildSchema(`
type Feedback {
  score: Float!
  text: String!
}

type Psychologist {
  name: String!
  feedback: [Feedback!]!
}

type Query {
  psychologists: [Psychologist!]!
}
`)
export const rootValue = {
  psychologists: () => [
    {
      name: 'Dr. John Smith',
      feedback: [
        {
          score: 4.5,
          text: 'Very empathetic and insightful. I felt understood and supported during every session. Dr. Smith’s approach was tailored to my needs, and I appreciate the personalized care I received.',
        },
        {
          score: 4.2,
          text: 'Dr. Smith was consistently attentive and provided useful strategies for managing stress. However, there were times when the sessions felt a bit rushed.',
        },
        {
          score: 4.7,
          text: 'I found Dr. Smith to be highly knowledgeable and supportive. The feedback was practical and actionable, which greatly helped me in my personal development.',
        },
      ],
    },
    {
      name: 'Dr. Jane Doe',
      feedback: [
        {
          score: 4.2,
          text: 'Professional but could be more engaging. Dr. Doe provided solid advice, though I would have liked a bit more interaction and personal connection during sessions.',
        },
        {
          score: 4.1,
          text: 'Good overall experience. Dr. Doe was punctual and respectful, but the sessions could benefit from a more dynamic approach to better address my specific issues.',
        },
      ],
    },
    {
      name: 'Dr. Emily Brown',
      feedback: [
        {
          score: 4.8,
          text: 'Highly recommended for her expertise. Dr. Brown’s deep knowledge and understanding of psychological concepts helped me make significant progress. The sessions were enriching and empowering.',
        },
        {
          score: 4.9,
          text: 'Exceptional support and insightful feedback. Dr. Brown’s approach was both supportive and challenging, which encouraged me to grow and explore new perspectives.',
        },
        {
          score: 4.7,
          text: 'Dr. Brown’s sessions were highly effective and well-structured. The feedback was always constructive and aimed at fostering personal growth.',
        },
        {
          score: 4.6,
          text: 'Very positive experience with Dr. Brown. The sessions were engaging and the feedback provided was practical and easy to apply to real-life situations.',
        },
      ],
    },
    {
      name: 'Dr. Michael Green',
      feedback: [
        {
          score: 4.0,
          text: 'Good, but there is room for improvement. Dr. Green was helpful in addressing my concerns, but the sessions could be more thorough and detailed.',
        },
      ],
    },
    {
      name: 'Dr. Sarah White',
      feedback: [
        {
          score: 4.7,
          text: 'Great support and understanding. Dr. White provided excellent feedback and was very empathetic. The sessions were always insightful and valuable.',
        },
        {
          score: 4.6,
          text: 'Dr. White’s approach was very supportive and well-rounded. The feedback was detailed and actionable, helping me tackle various challenges effectively.',
        },
        {
          score: 4.8,
          text: 'Very satisfied with the sessions. Dr. White’s ability to understand my issues and provide relevant feedback was instrumental in my progress.',
        },
      ],
    },
  ],
}
