import { Category } from "@/lib/types";
import Categories from "@/components/categories";
import Head from "next/head";
import Hero from "@/components/hero";
import { HeroProps } from "@/lib/types";
type props = {
  categories: Array<Category>;
  hero: HeroProps;
};
const Index = ({ categories, hero }: props) => {
  return (
    <>
      <Head>
        <title>Categories</title>
      </Head>
      {/* Hero section */}
      {/* Hero section */}
      <Hero
        title={hero.title}
        description={hero.description}
        ctaText={hero.ctaText}
        ctaHref={hero.ctaHref}
      />
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
  // console.log(categories); //This console is written on server side terminal/command prompt
  return {
    props: {
      categories,
      hero: {
        title: "Categories",
        description:
          "Use <strong>getStaticPros</strong> to generate page at build time.",
        ctaText: "Read more",
      },
    },
  };
}

export default Index;
