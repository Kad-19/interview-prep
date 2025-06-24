import Agent from '@/components/Agent'
import { interview_extraction_questions } from '@/constants'
import { getCurrentUser } from '@/lib/actions/auth.action'
import React from 'react'

const Page = async () => {
    const user = await getCurrentUser()
    return (
        <>
            <h3>Interview Generation</h3>

            <Agent userName={user?.name || "username"} userId={user?.id} type="generate" questions={interview_extraction_questions} />
        </>
    )
}
export default Page