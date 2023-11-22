'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { showMoreProps, updateSearchParams } from '@/utils'
import CustomButton from './CustomButton'

const ShowMore = ({pageNumber, isNext}: showMoreProps) => {
    const router = useRouter()
    const handleNavigation = () => {
        const newLimit = (pageNumber+1)*10

        const newPathName = updateSearchParams('limit', `${newLimit}`)

        router.push(newPathName)
    }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (<CustomButton title='Show More' containerStyles='bg-primary-blue text-white rounded-full' btnType='button' handleClick={handleNavigation}/>)}
    </div>
  )
}

export default ShowMore