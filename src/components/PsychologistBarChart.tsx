'use client'

import { Card } from '@mui/material'
import { BarChart, axisClasses } from '@mui/x-charts'

import { Psychologist } from '@/actions/getPsychologistScores'

export const PsychologistBarChart = ({
  psychologists,
}: {
  psychologists: Psychologist[]
}) => {
  const dataset = psychologists.map((psy) => ({
    name: psy.name,
    score: psy.score,
  }))

  const chartSettings = {
    yAxis: [
      {
        label: 'Psychologist Score',
      },
    ],
    width: 700,
    height: 400,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-10px, 0)',
      },
    },
  }

  return (
    <div className="flex">
      <Card raised>
        <BarChart
          margin={{ left: 80 }}
          xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
          series={[{ dataKey: 'score', label: 'Psychologist Score' }]}
          dataset={dataset}
          {...chartSettings}
        />
      </Card>
    </div>
  )
}
