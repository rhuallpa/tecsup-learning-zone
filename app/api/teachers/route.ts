import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { isAdmin } from "@/lib/admin";
import dotenv from "dotenv";

dotenv.config();

const envFilePath = path.resolve(process.cwd(), ".env");

interface TeachersData {
  teacher_ids: string[];
}

function getEnvTeachers(): TeachersData {
  const teacherIds = process.env.NEXT_PUBLIC_TEACHER_IDS?.split(",") || [];
  return { teacher_ids: teacherIds };
}

function saveEnvTeachers(teachers: TeachersData): void {
  const teacherIdsString = teachers.teacher_ids.join(",");
  const envConfig = fs.readFileSync(envFilePath, "utf-8").split("\n").map(line => {
    if (line.startsWith("NEXT_PUBLIC_TEACHER_IDS=")) {
      return `NEXT_PUBLIC_TEACHER_IDS=${teacherIdsString}`;
    }
    return line;
  }).join("\n");

  try {
    fs.writeFileSync(envFilePath, envConfig);
    dotenv.config(); // Reload the .env file
  } catch (error) {
    console.error("Error writing to .env file:", error);
    throw new Error("Failed to update .env file");
  }
}

async function authenticate(request: Request): Promise<NextResponse | null> {
  const userId = request.headers.get("user-id");
  if (!isAdmin(userId)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function GET(request: Request): Promise<NextResponse> {
  const authError = await authenticate(request);
  if (authError) return authError;
  const teachers = getEnvTeachers();
  return NextResponse.json(teachers);
}

export async function POST(request: Request): Promise<NextResponse> {
  const authError = await authenticate(request);
  if (authError) return authError;

  const { userId } = await request.json() as { userId: string };
  const teachers = getEnvTeachers();

  if (!teachers.teacher_ids.includes(userId)) {
    teachers.teacher_ids.push(userId);
    saveEnvTeachers(teachers);
  }

  return NextResponse.json({ message: "Teacher added successfully" });
}

export async function DELETE(request: Request): Promise<NextResponse> {
  const authError = await authenticate(request);
  if (authError) return authError;

  const { userId } = await request.json() as { userId: string };
  const teachers = getEnvTeachers();

  teachers.teacher_ids = teachers.teacher_ids.filter(id => id !== userId);
  saveEnvTeachers(teachers);

  return NextResponse.json({ message: "Teacher removed successfully" });
}
