import React from 'react';
import Link from 'next/link';

const AdminIndexPage = () => {
  return (
    <div>
      <h1>Panel de Administración</h1>
      <div>
        <Link href="/admin/tutors/add">
          <a>Agregar Tutor</a>
        </Link>
      </div>
      {/* Otros enlaces a funcionalidades adicionales del panel del administrador */}
    </div>
  );
};

export default AdminIndexPage;
