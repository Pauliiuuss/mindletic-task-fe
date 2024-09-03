import { graphql } from 'graphql'
import { NextResponse } from 'next/server'

import { rootValue, schema } from '@/graphql/schema'

export async function POST(request: Request) {
  try {
    const { query } = await request.json()

    const result = await graphql({
      schema,
      source: query,
      rootValue,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('GraphQL Error:', error)

    if (error instanceof Error) {
      return NextResponse.json({ errors: [error.message] }, { status: 500 })
    }

    return NextResponse.json(
      { errors: ['An unknown error occurred'] },
      { status: 500 }
    )
  }
}
