'use client'

import { Card } from '@mui/material'
import { BarChart, axisClasses } from '@mui/x-charts'

import { PsychologistFeedback } from '@/actions/getPsychologistFeedback'
import { PsychologistAverage } from '@/utils/calculateAverageScores'

export const PsychologistBarChart = ({
  psychologistsScore,
}: {
  psychologistsScore: PsychologistAverage[]
}) => {
  const dataset = psychologistsScore.map((psy) => ({
    name: psy.name,
    score: psy.score,
  }))

  const chartSettings = {
    yAxis: [
      {
        label: 'Psychologist Score',
      },
    ],
    width: 1000,
    height: 400,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-10px, 0)',
      },
    },
  }

  return (
    <div className="flex justify-center">
      <Card raised>
        <BarChart
          borderRadius={10}
          margin={{ left: 80 }}
          xAxis={[
            {
              scaleType: 'band',
              dataKey: 'name',
            },
          ]}
          series={[{ dataKey: 'score', label: 'Psychologist Score' }]}
          dataset={dataset}
          {...chartSettings}
        />
      </Card>
    </div>
  )
}
