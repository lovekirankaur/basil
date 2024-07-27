import { TotalData } from '@/lib/data'
import React from 'react'

export default function Detailbox() {
  return (
    <div className=''>
      <ul className='flex flex-row gap-10 md:gap-12 lg:gap-16 xl:gap-20 mx-3 my-4 md:mx-4 lg:mx-5 xl:mx-7  text_s text-zinc-700'>
        <li>Machines: 6</li>
        <li>Orders: 28</li>
        <li>Customers: 28</li>
        <li>Drinks:27</li>
        <li>Total Amount: 123679</li>
        <li>Refund Initiated: 4</li>
      </ul>
    </div>
  )
}
