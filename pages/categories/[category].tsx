import { Category } from "@/lib/types";
import Head from "next/head";
import { useRouter } from "next/router";
type pageProps = {
  category: Category;
};
const Category = ({ category }: pageProps) => {
  console.log(category);
  return (
    <>
      <Head>
        <title>{category.name}</title>
      </Head>
      <div className="mx-auto max-w-7xl py-24">
        <h1 className="text-3xl font-bold">{category.name}</h1>
        <p className="mt-2">{category.description}</p>
      </div>
    </>
  );
};

export default Category;

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/categories");
  const categories = await response.json();

  const paths = categories.map((c: Category) => ({
    params: { category: c.slug },
  }));

  return { paths, fallback: false };
}
type props = {
  params: any;
};
export async function getStaticProps({ params }: props) {
  console.log(params);
  const response = await fetch(
    `http://localhost:3000/api/categories/${params.category}`
  );
  const category = await response.json();
  return {
    props: {
      category,
    },
  };
}
