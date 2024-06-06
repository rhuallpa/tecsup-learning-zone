"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Drawer } from "@/components/ui/drawer"
import DatePickerForm from './form1/DatePickerForm' // Importa el formulario correctamente

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="p-4">
      <Button onClick={toggleDrawer}>Solicitar Tutoría</Button>
      <Drawer open={drawerOpen} onClose={toggleDrawer}>
        <div className="p-4">
          <h2 className="mb-4 text-lg font-semibold">Solicitar Tutoría</h2>
          <DatePickerForm />
        </div>
      </Drawer>
    </div>
  );
};

export default App;
