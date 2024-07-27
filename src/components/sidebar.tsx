import Image from 'next/image';
import React from 'react'
import { FaClipboardList, FaHome, FaSearch, FaUser } from 'react-icons/fa';

export default function Sidebar() {
    return (
        <div className="w-12 md:w-14 lg:w-16 h-screen bg-white border-white border-r shadow-md shadow-zinc-100 flex flex-col items-center py-4">
          <div className="mb-10">
            <Image src="/basillogo.png" alt="Logo" width={20} height={20} />
          </div>
          <nav className="flex flex-col">
            
              <FaHome className=" my-3 text-zinc-700"/>
           
              <FaClipboardList className="my-3 text-blue-600" />

              <FaSearch className="my-3 text-zinc-700" />

              <FaUser className="my-3 text-zinc-700" />

          </nav>
        </div>
      );
}
