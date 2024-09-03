import { Typography } from '@mui/material'

import { PsychologistBarChart } from '@/components/PsychologistBarChart'
import { PsychologistFeedbackCard } from '@/components/PsychologistFeedbackCard'

import { getPsychologistsFeedback } from '@/actions/getPsychologistFeedback'
import { calculateAverageScores } from '@/utils/calculateAverageScores'

export default async function Home() {
  const feedbackData = await getPsychologistsFeedback()

  const avgScores = calculateAverageScores(feedbackData.psychologists)

  return (
    <div className="flex flex-col gap-20">
      <PsychologistBarChart psychologistsScore={avgScores} />
      <div className="flex flex-col gap-10 text-center">
        <Typography variant="h2">{'Psychologists Reviews'}</Typography>
        {feedbackData.psychologists.map((psy) => {
          return (
            <PsychologistFeedbackCard data={psy.feedback} name={psy.name} />
          )
        })}
      </div>
    </div>
  )
}
