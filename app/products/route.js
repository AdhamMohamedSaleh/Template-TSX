import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // your MongoDB client setup

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("myEcommerceDB");
    const products = await db.collection("products").find({}).toArray();

    // convert _id to string
    const formattedProducts = products.map(p => ({
      ...p,
      _id: p._id.toString(),
    }));

    return NextResponse.json(formattedProducts);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
