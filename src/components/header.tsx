
import React from 'react';
import Searchbox from './searchbox';
import { BsBell } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
  params?: { 
    id?: number 
 };
}

export default function Header({ params }: HeaderProps) {
  return (
    <header className='bg-white h-16 mx-3 px-7 border-white border-l border-r border-b rounded-b-2xl shadow-md shadow-zinc-100 flex flex-row justify-between items-center'>
       
       <Link href = "/"><h1 className='font-sans text-base font-medium text-zinc-700 '>All Orders</h1></Link>
      <div className='flex flex-row justify-end items-center w-1/2 gap-4'>
      <Searchbox/>
      <BsBell/>
      <Image src="/basillogo.png" alt="Logo" width={20} height={20} />
      </div>
    </header>
  );
}