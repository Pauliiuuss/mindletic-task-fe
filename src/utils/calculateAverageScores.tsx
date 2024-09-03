import { PsychologistFeedback } from '@/actions/getPsychologistFeedback'

export interface PsychologistAverage {
  name: string
  score: number
}

export const calculateAverageScores = (
  psychologists: PsychologistFeedback[]
): PsychologistAverage[] => {
  return psychologists.map((psychologist) => {
    const totalScore = psychologist.feedback.reduce(
      (sum, feedback) => sum + feedback.score,
      0
    )
    const averageScore = totalScore / psychologist.feedback.length
    return {
      name: psychologist.name,
      score: parseFloat(averageScore.toFixed(1)),
    }
  })
}
