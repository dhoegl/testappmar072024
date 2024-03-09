import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";

const contactSchema = z.object({
    churchid: z.number().int(),
    last: z.string().min(1).max(100),
    first: z.string().min(1).max(100)
})

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = contactSchema.safeParse(body);
    if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

    const newContact = await prisma.contact.create({
        data: { churchid: body.churchid, last: body.last, first: body.first }
    })

    return NextResponse.json(newContact, { status: 201 })
}