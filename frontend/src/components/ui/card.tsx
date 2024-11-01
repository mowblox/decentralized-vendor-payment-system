import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './button';
import Image from 'next/image';
import { CardProps } from '../../../types/card.types';




function Card({ title, description, image, buttonClassName, imageClassName }: CardProps) {
  return (
    <div className='relative mb-20 '>
      <div className="border-light border h-[400px] mb-20 rounded-3xl relative shadow-lg"> 
        <div className={cn("absolute dark:text-light", imageClassName)}>
          <Image src={image} alt={`${image}.img`} height={100} width={200} />
        </div>

        <Button 
      className={cn(
    buttonVariants({
      variant: "outline", 
    }),
    "bg-darkGray uppercase text-light dark:border-light rounded-full font-pop py-3 sm:py-6 lg:py-5 px-4 sm:px-8 lg:px-5 text-[16px] border border-dark", 
    buttonClassName 
  )}
>
  {title}
</Button>

      </div>

      <div className='relative '>
        <p className="font-pop text-start absolute bottom-[-60] right-4 w-full px-4 dark:text-light">
          {description}
        </p>
      </div>
    </div>
  );
}



export default Card;


