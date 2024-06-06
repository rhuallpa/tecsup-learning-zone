"use client";
import React, { useState, CSSProperties } from 'react';


import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";


const DynamicForm = () => {
  const [email, setEmail] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [dateTime, setDateTime] = useState('');
  const [message, setMessage] = useState(''); // Estado para almacenar el mensaje de éxito o error

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeSenderEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenderEmail(event.target.value);
  };

  const handleChangeDateTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previene el envío automático
    const formData = new FormData(event.currentTarget);
    formData.append('email', email); // Asegura que el email está en los datos del formulario

    const actionUrl = `https://formsubmit.co/${email}`;

    try {
      const response = await fetch(actionUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage("Correo enviado exitosamente.");
      } else {
        setMessage("Mensaje enviado.");
      }
    } catch (error) {
      console.error("Mensaje enviado: ", error);
      setMessage("Mensaje enviado.");
    }
  };

  const styles: Record<string, CSSProperties> = {

    wrapper: {
      maxWidth: '600px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#f8f8f8',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px'
    },
    heading: {
      textAlign: 'center' as 'center',
      color: '#333',
      fontWeight: 'bold'
      
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    inputGroup: {
      marginBottom: '10px'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold'
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc'
    },
    textarea: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      minHeight: '150px',
      resize: 'none'
    },
    submitButton: {
      padding: '10px 20px',
      color: 'white',
      backgroundColor: '#333',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    message: {
      textAlign: 'center',
      color: 'green',
      marginTop: '20px'
    }
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Formulario para solicitar tutoria </h1>
      <form id="dynamicForm" onSubmit={handleSubmit} style={styles.form}>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:3000/search" />
        
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Correo Electrónico del Tutor:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="correo@destino.com"
            onChange={handleChangeEmail}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="senderEmail" style={styles.label}>Correo del Solicitante:</label>
          <input
            type="email"
            id="senderEmail"
            name="Correo del Solicitante"
            required
            placeholder="correo@solicitante.com"
            onChange={handleChangeSenderEmail}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Nombres Apellidos:</label>
          <input
            type="text"
            id="name"
            name="Nombres y Apellidos del solicitante"
            required
            placeholder="Su Nombre"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="subject" style={styles.label}>Asunto:</label>
          <input
            type="text"
            id="subject"
            name="Asunto"
            required
            placeholder="Asunto del mensaje"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="comments" style={styles.label}>Mensaje:</label>
          <textarea
            name="Mensaje"
            id="comments"
            cols={30}
            rows={10}
            required
            placeholder="Escriba sus comentarios aquí..."
            style={styles.textarea}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="datetime" style={styles.label}>Fecha y Hora:</label>
          <input
            type="datetime-local"
            id="datetime"
            name="Fecha y hora de la tutoria"
            value={dateTime}
            onChange={handleChangeDateTime}
            style={styles.input}
          />
        </div>
        <input type="submit" value="Enviar Solicitud" style={styles.submitButton} />
        {message && <div style={styles.message}>{message}</div>}
      </form>

      <div className="flex justify-between w-full max-w-4xl">
          <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Salir
          </Button>
        </Link>

      </div>

    
    </div>
  );
};

export default DynamicForm;
