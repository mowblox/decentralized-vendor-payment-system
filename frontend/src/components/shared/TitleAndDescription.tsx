import { cn } from '@/lib/utils'
import React from 'react'
import { TitleDescriptionProps } from '../../../types/titleDescription'



function TitleAndDescription(
  {title, description, className, titleStyle, descriptionStyle}:TitleDescriptionProps)
   {
  return (
    <div className={cn('m-5 ', className)}>
        <div>
          <h1 className={cn('text-[18px] mb-5 font-nowy md:w-[500px] capitalize dark:text-light md:text-[35px]',titleStyle)}>{title}</h1>
        </div>

        <div className='w-full md:w-[700px] lg:w-[800px]'>
          <p className={cn(' font-pop dark:text-light', descriptionStyle)}>{description}</p>
        </div>

      </div>
  )
}

export default TitleAndDescription