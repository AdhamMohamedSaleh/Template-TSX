'use client';

import { products } from "@/MockData";
import { Input } from "@/components/ui/input"
import { useState } from "react";

export default function SearchInput() {
    const [searchItems, setSearchItems] = useState("");

  const filteredProduct = products.filter((product) => {
      const term = searchItems.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(term);
      const categoryMatch = product.category.toLowerCase().includes(term);
      const descriptionMatch = product.description ? product.description.toLowerCase().includes(term) : false;
      return nameMatch || categoryMatch || descriptionMatch;
  });

  return <Input type="text" placeholder="Search Products..." onChange={(e) => setSearchItems(e.target.value)} />
}
