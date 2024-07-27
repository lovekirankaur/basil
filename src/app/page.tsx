'use client'

import Detailbox from "@/components/detailbox";
import Filter from "@/components/filter";
import Header from "@/components/header";
import IconsRight from "@/components/icons_right";
import OrderList from "@/components/order_list";
import Searchbox from "@/components/searchbox";
import Sidebar from "@/components/sidebar";
import { AllData } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [selectedMachine, setSelectedMachine] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);


  const filteredOrders = AllData.filter(order => {
    const matchesStatus = selectedStatus ? order.status === selectedStatus : true;
    const matchesMachine = selectedMachine ? order.machine.includes(selectedMachine) : true;
    const matchesDate =
      startDate && endDate
        ? new Date(order.date.split('/').reverse().join('-')) >= startDate &&
          new Date(order.date.split('/').reverse().join('-')) <= endDate
        : true;
    return matchesStatus && matchesMachine && matchesDate;
  });

  return (
    <main className="Container gap-3 m-3">
      <div className=" item_screen flex flex-row justify-between items-center bg-zinc-50">
        <Searchbox/>
        <IconsRight/>
      </div>
      <div className="item_details border bg-white border-white rounded-2xl shadow-md shadow-zinc-100">
        <Detailbox/>
      </div>
      <div className="item_orderdetails bg-white border-white rounded-2xl shadow-md shadow-zinc-100 h-full">
        <OrderList orders={filteredOrders} />
      </div>
      <div className="item_filter border bg-white border-white rounded-2xl shadow-md shadow-zinc-100">
        <Filter
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedMachine={selectedMachine}
        setSelectedMachine={setSelectedMachine}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        />
      </div>
    </main>
  );
}
