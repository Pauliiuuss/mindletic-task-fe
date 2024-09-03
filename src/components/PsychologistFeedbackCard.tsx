import { Card, CardContent, Typography } from '@mui/material'

import { Feedback } from '@/actions/getPsychologistFeedback'

export const PsychologistFeedbackCard = ({
  data,
  name,
}: {
  data: Feedback[]
  name: string
}) => {
  console.log(data)
  return (
    <div className="flex flex-col gap-6" key={name}>
      <Typography variant="h4" component="div" align="center">
        {name}
      </Typography>
      <div className="flex justify-center gap-6">
        {data.map((feedback) => {
          return (
            <Card
              sx={{
                minWidth: 320,
                maxWidth: 400,
              }}
              raised
              key={feedback.score + feedback.text}
            >
              <CardContent>
                <Typography variant="h5" component="div" align="center">
                  {feedback.score}
                </Typography>
                <Typography variant="body2" align="center">
                  {feedback.text}
                </Typography>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
