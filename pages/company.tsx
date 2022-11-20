import CategoriesSWR from "@/components/categoriesSWR";
import Hero from "@/components/hero";
import { HeroProps } from "@/lib/types";
import Head from "next/head";

type Props = {
  browserTitle: string;
  hero: HeroProps;
};
const Company = ({ browserTitle, hero }: Props) => {
  return (
    <>
      <Head>
        <title>{browserTitle}</title>
      </Head>
      {/* Hero section */}
      <Hero
        title={hero.title}
        description={hero.description}
        ctaText={hero.ctaText}
        ctaHref={hero.ctaHref}
      />
      <div className="mx-auto max-w-7xl py-24">
        <h1 className="text-3xl font-bold">Company</h1>
        <p className="mt-2">
          This is static generation which depends on external data.
        </p>
        <CategoriesSWR />
      </div>
    </>
  );
};

export default Company;

/**
 * If you export a function called getServerSideProps from a page, Next.js will pre-render this page on each request using the data
 * returned by getServerSideProps.
 */
export async function getServerSideProps(context: any) {
  //console.log("This is from getServerSideProps");
  return {
    props: {
      browserTitle: "Company",
      hero: {
        title: "Our company",
        description:
          "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in tock. - from getServerSideProps",
        ctaText: "Read more",
      },
    },
  };
}
