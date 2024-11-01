import { cn } from '@/lib/utils'

function DefaultText({title, className}:{title:string, className?:string}) {
  return (
    <div>
      <h1 className={cn('font-pop font-thin text-dark text-[28px] text-center capitalize md:font-nowy md:text-[35px]  ',className)}>{title}</h1>
    </div>
  )
}

export default DefaultText