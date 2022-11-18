import { NextApiRequest, NextApiResponse } from "next";
import { Category, NotFound } from "@/lib/types";
import { categories } from "@/lib/data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category | NotFound>
) {
  const { category } = req.query;
  // console.log(category);
  const foundCategory = categories.filter((c) => c.slug === category);
  // console.log(foundCategory);
  if (foundCategory && foundCategory.length > 0) {
    res.status(200).json(foundCategory[0]);
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
