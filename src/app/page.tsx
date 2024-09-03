import { PsychologistBarChart } from '@/components/PsychologistBarChart'
import { PsychologistFeedbackCard } from '@/components/PsychologistFeedbackCard'

import { getPsychologistsFeedback } from '@/actions/getPsychologistFeedback'
import { getPsychologists } from '@/actions/getPsychologistScores'

export default async function Home() {
  const psyData = await getPsychologists()
  const feedbackData = await getPsychologistsFeedback()

  return (
    <div className="flex flex-col gap-20">
      <PsychologistBarChart psychologists={psyData.psychologists} />
      {feedbackData.psychologists.map((psy) => {
        return <PsychologistFeedbackCard data={psy.feedback} name={psy.name} />
      })}
    </div>
  )
}
