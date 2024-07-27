import { AllData } from '@/lib/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react';


type Order = {
    id: string;
    date: string;
    time: string;
    orderId: string;
    machine: string;
    custormer: string;
    contact: string;
    amount: string;
    status: string;
  };
  
  type OrderListProps = {
    orders: readonly Order[];
  };

const statusClasses: { [key: string]: string } = {
    SUCCESS: 'text-green-600 border-green-600',
    FAILURE: 'text-red-600 border-red-600',
    SENT: 'text-orange-600 border-orange-600',
    'REFUND INITIATED': 'text-blue-600 border-blue-600',
    'REFUND COMPLETED': 'text-fuchsia-600 border-fuchsia-600',
    PENDING: 'text-yellow-600 border-yellow-600',
};

export default function OrderList({
    orders
}:OrderListProps) {

    const router = useRouter()

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {['S.NO', 'DATE', 'ORDER ID', 'MACHINE NAME', 'CUSTOMER NAME', 'CONTACT NUMBER', 'TOTAL AMOUNT', 'STATUS'].map((heading, index) => (
                            <th key={index} className="font-sans text-xs font-medium text-blue-500 py-3 px-5 text-left">
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {orders.map((data, index) => {
                        const statusClass = statusClasses[data.status] || 'text-gray-600 border-gray-600';
                        return (

                            
                            <tr key={index} className="hover:cursor-pointer" onClick={() => router.push(`/orders/${index}`)}>  
                                <td className="table-cell">{data.id}</td>
                                <td className="table-cell">{data.date}<br></br><p className='text_vs mt-1'>{data.time}</p></td>
                                <td className="table-cell">{data.orderId}</td>
                                <td className="table-cell">{data.machine}</td>
                                <td className="table-cell">{data.custormer}</td>
                                <td className="table-cell">{data.contact}</td>
                                <td className="table-cell">&#8377; {data.amount}</td>
                                <td className="font-sans font-extralight py-3 px-5 rounded-3xl whitespace-nowrap">
                                    <p className={`text-center text_vs border py-1 px-2 rounded-full inline-block ${statusClass}`}>
                                        {data.status}
                                    </p>
                                </td>
                            </tr>
                           
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
