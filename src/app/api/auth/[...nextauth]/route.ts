import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json(
		{ message: "Auth route is not configured yet." },
		{ status: 501 },
	);
}

export async function POST() {
	return NextResponse.json(
		{ message: "Auth route is not configured yet." },
		{ status: 501 },
	);
}
