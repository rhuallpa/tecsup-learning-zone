"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import DatePickerForm from './form1/DatePickerForm'; // Asegúrate de que la ruta de importación es correcta
import { LogOut } from "lucide-react";
import Link from "next/link";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="flex justify-between w-full max-w-4xl">
        <Button onClick={toggleDrawer}>Añadir Tutor</Button>
        <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Salir
          </Button>
        </Link>
      </div>
      {drawerOpen && (
        <Drawer open={drawerOpen} onClose={toggleDrawer} className="mt-4">
          <div className="p-4">
            <h2 className="mb-4 text-lg font-semibold">Panel del administrador para gestionar a tutores </h2>
            <DatePickerForm />
          </div>
        </Drawer>
      )}
    </div>
  );
};

export default App;
