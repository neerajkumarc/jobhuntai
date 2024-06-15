import React from 'react'
import { doLogout } from '@/app/actions'

const Logout = () => {
  return (
    <form action={doLogout}>
        <button type='submit' className='px-4 py-2 text-base bg-black text-white rounded-lg mt-2'>Logout</button>
    </form>
  )
}

export default Logout