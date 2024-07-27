
'use client'

import { useParams} from 'next/navigation';
import { AllData } from '@/lib/data';
import React from 'react'

export default function OrderDetails() {

  const { id } = useParams<{ id: string }>();

  const orderIndex = parseInt(id, 10);
  const orderData = AllData[orderIndex];

  if (!orderData) {
      return <p>No data available for this order.</p>;
  }


  if (!orderData) {
      return <p>No data available for this order.</p>;
  }

  return (
    <div className='flex flex-row gap-3 h-full m-3'>
      <div className='w-1/3 border my-16 ml-10 rounded-2xl font-global'>
                <p><strong>Date:</strong> {orderData.date}</p>
                <p><strong>Time:</strong> {orderData.time}</p>
                <p><strong>Order ID:</strong> {orderData.orderId}</p>
                <p><strong>Machine:</strong> {orderData.machine}</p>
                <p><strong>Customer:</strong> {orderData.custormer}</p>
                <p><strong>Contact:</strong> {orderData.contact}</p>
                <p><strong>Amount:</strong> &#8377; {orderData.amount}</p>
                <p><strong>Status:</strong> {orderData.status}</p>
      </div>

      <div className='w-2/3 border my-16 mr-10 rounded-2xl h-1/2 '>
      <h1>order details </h1>
      </div>

      </div>
  )
}
