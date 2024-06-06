export const isTeacher = (userId?: string | null) => {
  if (!userId) {
    return false;
  }

  const teacherId = process.env.NEXT_PUBLIC_TEACHER_ID || '';
  const teacherIds = process.env.NEXT_PUBLIC_TEACHER_IDS?.split(',') || [];

  return userId === teacherId || teacherIds.includes(userId);
}



