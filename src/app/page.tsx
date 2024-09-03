import { PsychologistBarChart } from '@/components/PsychologistBarChart'

import { getPsychologists } from '@/actions/getPsychologistScores'

export default async function Home() {
  const data = await getPsychologists()

  return (
    <div>
      <PsychologistBarChart psychologists={data.psychologists} />
    </div>
  )
}
