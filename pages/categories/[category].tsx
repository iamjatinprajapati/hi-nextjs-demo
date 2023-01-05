import { Category } from "@/lib/types";
import Head from "next/head";
import { useRouter } from "next/router";
import Hero from "@/components/hero";
import { HeroProps } from "@/lib/types";
type pageProps = {
  category: Category;
  hero: HeroProps;
};
const CategoryPage = ({ category, hero }: pageProps) => {
  console.log(category);
  return (
    <>
      <Head>
        <title>{category.name}</title>
      </Head>
      {/* Hero section */}
      <Hero
        title={hero.title}
        description={hero.description}
        ctaText={hero.ctaText}
        ctaHref={hero.ctaHref}
      />
      <div className="mx-auto max-w-7xl py-24">
        <h1 className="text-3xl font-bold">{category.name}</h1>
        <p className="mt-2">{category.description}</p>
      </div>
    </>
  );
};

export default CategoryPage;

/**
 * If a page has dynamic routes and uses getStaticProps, it needs to define a list of paths to be statically generated.
 *
 * When you export a function called getStaticPaths (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.
 *
 * @returns
 */
export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/categories");
  const categories = await response.json();

  const paths = categories.map((c: Category) => ({
    params: { category: c.slug },
  }));

  console.log(paths);

  return { paths, fallback: false };
}
type props = {
  params: any;
};

export async function getStaticProps({ params }: props) {
  // console.log("Params");
  // console.log(params);
  const response = await fetch(
    `http://localhost:3000/api/categories/${params.category}`
  );
  const category = await response.json();
  return {
    props: {
      category,
      hero: {
        title: "Category",
        description:
          "from <strong><em>getStaticProps and getStaticPaths</em></strong>",
        ctaText: "Read more",
      },
    },
  };
}
