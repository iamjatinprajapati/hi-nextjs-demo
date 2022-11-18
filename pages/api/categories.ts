import { NextApiRequest, NextApiResponse } from "next";
import { Category } from "@/lib/types";
import { categories } from "@/lib/data";
import { sleep } from "@/lib/helper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Category>>
) {
  const { wait, ms } = req.query;
  if (wait && ms) {
    await sleep(Number(ms));
  }
  res.status(200).json(categories);
}
