import TitleAndDescription from '@/components/shared/TitleAndDescription'
import React from 'react'
import PaymentCard from './PaymentCard'


function PaymentPage() {
  return (
    <div className='flex flex-col md:flex-col lg:flex-row   md:mx-5 justify-between'>

       <TitleAndDescription
       title='seamless crypto payments for digital creators'
        description='Accept payments globally without boundaries. Create product links in seconds, share instantly, and receive crypto payments seamlessly. No complex integrations. No coding required.'/>
  

       <PaymentCard/>
       
      </div>
  )
}

export default PaymentPage