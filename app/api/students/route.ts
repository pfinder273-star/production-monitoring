import { NextResponse } from "next/server";

export async function GET() {
  const startTime = Date.now();

  try {
    console.log("Students API request received");

    const students = [
      { id: 1, name: "John Doe", age: 20 },
      { id: 2, name: "Jane Smith", age: 22 },
      { id: 3, name: "Alice Johnson", age: 19 },
    ];

    console.log("Students fetched successfully");

    return NextResponse.json({
      success: true,
      students,
      duration: Date.now() - startTime,
    });
  } catch (error) {
    console.error("Failed to fetch students", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch students",
        duration: Date.now() - startTime,
      },
      { status: 500 },
    );
  }
}
   