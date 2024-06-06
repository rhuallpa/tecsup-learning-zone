import { getAuth } from "@clerk/nextjs/server";

export const isAdmin = (userId?: string | null) => {
  if (!userId) {
    return false;
  }
  const adminId = process.env.NEXT_PUBLIC_ADMIN_ID || '';
  const teacherId = process.env.NEXT_PUBLIC_TEACHER_ID || '';
  
  return userId === adminId || teacherId.includes(userId);
}



