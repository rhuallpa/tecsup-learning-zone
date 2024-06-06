const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Administración de Redes y Comunicaciones" },
        { name: "Modelado y Animación Digital" },
        { name: "Diseño y Desarrollo de Simuladores y Videojuegos" },
        { name: "Diseño y Desarrollo de Software" },
        { name: "Big Data y Ciencia de Datos" },
        { name: "Informacion de TD" },
        { name: "Tutorias Personalizadas" },
        

      ]
    });


    console.log("Exito");
  } catch (error) {
    console.log("Error al inicializar las categorias de la base de datos", error);
  } finally {
    await database.$disconnect();
  }
}

main();