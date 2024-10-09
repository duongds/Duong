import BasicButton from '@/components/common/BasicButton'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <main className={'h-full'}>
        <div className={'flex items-center justify-center h-full'}>
          <div className={'max-w-[400px] flex flex-col gap-3 items-center'}>
            <h1 className={'font-inter-700 text-32-40'}>404</h1>
            <h2 className={'font-inter-500 text-24-32'}>UH OH! You&apos;re lost.</h2>
            <p className={'font-inter-400 text-16-24 text-center'}>
              The page you are looking for does not exist. How you got here is a mystery. But you can click the button
              below to go back to the homepage.
            </p>
            <div>
              <Link to={'/'}>
                <BasicButton>Back to home</BasicButton>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound
