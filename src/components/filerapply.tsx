'use client'

import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type FilterProps = {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedMachine: string;
  setSelectedMachine: (machine: string) => void;
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  endDate: Date | null;
  setEndDate: (date: Date | null) => void;
  closeFilter: () => void;
};

export default function Filerapply({
  selectedStatus,
  setSelectedStatus,
  selectedMachine,
  setSelectedMachine,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  closeFilter}:FilterProps) {

   

    const [machineSearch, setMachineSearch] = useState<string>('');
    const statuses = ["SUCCESS", "FAILURE", "SENT", "REFUND INITIALED", "REFUND COMPLETED", "PENDING"];
    const machines = [
      "Aahaar stall 15", "Aahaar stall 88", "Aahaar stall 89", 
      "Aahaar stall 87", "Aahaar stall 51", "Aahaar stall 99", 
      "Aahaar stall 98", "Aahaar stall 78", "Aahaar stall 13"
    ];
  
    const filteredMachines = machines.filter(machine => 
      machine.toLowerCase().includes(machineSearch.toLowerCase())
    );


    return (
    <>
    <div
    className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'
          onClick = {closeFilter}></div>
  <div className='bg-white h-full sm:w-[450px] w-40 absolute top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%]  flex flex-col justify-around   border-white rounded-md'>

    <div className='flex flex-row justify-between w-1/2 h-10 mx-4  self-end absolute top-1'>
      <h1 className='font-sans text-sm font-medium text-zinc-700 my-3'>Fiters</h1>
      <button className='font-sans text-sm font-medium text-red-600' onClick={closeFilter}>x</button>
    </div>

          {/* Machine Search */}
        <div className="my-4 p-3 border border-zinc-300 rounded-md min-h-96">
          <h1 className='font-sans text-xs font-medium py-2 px-2 text-zinc-700'>Machine</h1>
        <input
          type="text"
          placeholder="Search"
          value={machineSearch}
          onChange={(e) => setMachineSearch(e.target.value)}
          className="font-sans text-xs font-medium text-zinc-500 py-2 px-2 border border-zinc-300 mx-1 rounded-md"
        />
        <div className=" flex flex-col justify-center my-3">
          {filteredMachines.map(machine => (
            <button
              key={machine}
              className={`font-sans text-xs font-medium py-2 px-2 border border-zinc-300 mx-1 rounded-md ${
                selectedMachine === machine ? 'bg-zinc-400 text-white' : 'text-zinc-700'
              }`}
              onClick={() => setSelectedMachine(machine)}
            >
              {machine}
            </button>
          ))}
        </div>
      </div>

      <div className='flex flex-row'>
        {statuses.map(status => (
          <button
            key={status}
            className={`font-sans text_vs font-medium py-2 px-2 border border-zinc-400 mx-1 rounded-md inline-block ${
              selectedStatus === status ? 'bg-zinc-500 text-white' : 'text-zinc-500'
            }`}
            onClick={() => setSelectedStatus(status)}
          >
            {status}
          </button>
        ))}
        </div>


        {/* Date Range Filter */}

        
      <div className="flex justify-center space-x-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-zinc-500">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={setStartDate}
            className="font-sans text-xs font-medium text-zinc-500 py-2 px-2 border border-zinc-400 rounded-md"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-500">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={setEndDate}
            className="font-sans text-xs font-medium text-zinc-500 py-2 px-2 border border-zinc-400 rounded-md"
          />
        </div>
      </div>
      </div>
    </>
  );
}
