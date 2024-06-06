"use client";

import { Category } from "@prisma/client";




import { FcBriefcase, FcGlobe, FcVideoFile, FcDataProtection, FcEngineering, FcInfo, FcCollaboration, FcMultipleDevices, FcPrivacy, FcFilm, FcStatistics, FcSupport, FcConferenceCall} from "react-icons/fc";

import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}


const iconMap: Record<Category["name"], IconType> = {
  "Administración de Redes y Comunicaciones": FcGlobe,
  "Modelado y Animación Digital": FcFilm,
  "Diseño y Desarrollo de Simuladores y Videojuegos": FcEngineering,
  "Big Data y Ciencia de Datos": FcDataProtection,
  "Diseño y Desarrollo de Software": FcMultipleDevices,
  "Informacion de TD": FcInfo,
  "Tutorias Personalizadas": FcConferenceCall,
};


export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}