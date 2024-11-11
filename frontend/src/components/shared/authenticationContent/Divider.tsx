import Image from 'next/image'
import DividerLine from '../../../../public/images/authImagePage/divider.png'

function Divider() {
  return (
    <div className='flex flex-row space-x-3'>
       <Image src={DividerLine} alt=''/>
         <h1>or</h1>
         <Image src={DividerLine} alt=''/>
     </div>
  )
}

export default Divider