'use client'

import React, { useState } from 'react';
import Filerapply from './filerapply';
import { format } from 'date-fns';

type FilterProps = {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedMachine: string;
  setSelectedMachine: (machine: string) => void;
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  endDate: Date | null;
  setEndDate: (date: Date | null) => void;
};

export default function Filter({
  selectedStatus,
  setSelectedStatus,
  selectedMachine,
  setSelectedMachine,
  startDate,
  setStartDate,
  endDate,
  setEndDate}:FilterProps) {


  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);

  function openFilter() {
    setIsFilterVisible(true);
  }

  function closeFilter() {
    setIsFilterVisible(false);
  }


  return (
    <div className='h-20'>
      <h1 className='text-center font-sans text-xs font-medium text-zinc-500 py-3 px-5 '>FILTERS</h1>
      <button
        className='font-sans text-xs font-medium text-zinc-500 py-2 px-2 border border-zinc-400 mx-1 md:mx-2 lg:mx-3 xl:mx-5 rounded-md'
        onClick={openFilter}
      >
        select filters
      </button>
      {isFilterVisible&& 
      <Filerapply 
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedMachine={selectedMachine}
        setSelectedMachine={setSelectedMachine}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        closeFilter={closeFilter} />}

      <div className='flex flex-col items-start'>

      {selectedStatus && (
        <div className='table-cell'>
          <strong>Status:</strong> {selectedStatus} <button className='text-red-600' onClick={() => setSelectedStatus('')}>x</button>
        </div>
        )}
      {selectedMachine && (
        <div className='table-cell'>
          <strong>Machine:</strong> {selectedMachine} <button className='text-red-600' onClick={() => setSelectedMachine('')}>x</button>
        </div>
      )}
      {startDate && (
        <div className='table-cell'>
          <strong>Start Date:</strong> {format(startDate, 'MM/dd/yyyy')} <button className='text-red-600' onClick={() => setStartDate(null)}>x</button>
        </div>
      )}
      {endDate && (
        <div className='table-cell'>
          <strong>End Date:</strong> {format(endDate, 'MM/dd/yyyy')} <button className='text-red-600' onClick={() => setEndDate(null)}>x</button>
        </div>
      )} 

      </div>


    </div>
  );
}

