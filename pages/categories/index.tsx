import { Category } from "@/lib/types";
import Categories from "@/components/categories";
import Head from "next/head";
type props = {
  categories: Array<Category>;
};
const Index = ({ categories }: props) => {
  return (
    <>
      <Head>
        <title>Categories</title>
      </Head>
      <Categories
        title="Show by categories (static generation with server data)"
        ctaHref="#"
        ctaText=""
        categories={categories}
        classes="py-24"
      />
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/categories");
  const categories = await response.json();
  console.log(categories); //This console is written on server side terminal/command prompt
  return {
    props: {
      categories,
    },
  };
}

export default Index;
