"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar"; // Asegúrate de importar correctamente el componente Calendar
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const TutoringRequestPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [date, setDate] = React.useState(new Date());
  const [status, setStatus] = React.useState("");

  const onSubmit = (data) => {
    setStatus("El Usuario se añadio como tutor con exito.");
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h3 className="text-3xl font-bold mb-6">Ingresar datos del tutor</h3>
      <form
        className="mt-4"
        action="https://formsubmit.co/tu-email@tu-dominio.com"  // Reemplaza con tu dirección de correo
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://tudominio.com/gracias.html" />
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nombres y Apellidos          </label>
          <input
            type="text"
            name="name"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            placeholder="rebeca.huallpa@tecsup.edu.pe"
            {...register("name", { required: true })}
          />
        </div>
        {errors.name && <p className="text-red-500">Este campo es requerido.</p>}
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
          Correo del Solicitante a tutor:
          </label>
          <input
            type="email"
            name="email"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            placeholder="martin.perez@tecsup.edu.pe"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>
        {errors.email && <p className="text-red-500">Por favor, ingrese un correo electrónico válido.</p>}
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            UserID          </label>
          <input
            type="text"
            name="name"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            placeholder="rebeca.huallpa@tecsup.edu.pe"
            {...register("name", { required: true })}
          />
        </div>
        {errors.message && <p className="text-red-500">Este campo es requerido.</p>}
        
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-md shadow-sm"
        >
          Confirmar Añadir Tutor
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
};
export default TutoringRequestPage;


