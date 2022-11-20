import CategoriesSWR from "@/components/categoriesSWR";
import FeaturedSection from "@/components/featuredsection";
import Hero from "@/components/hero";
import { DocumentContext } from "next/document";
import Head from "next/head";
const collections = [
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
  {
    name: "Focus Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
  },
];
type Props = {
  browserTitle: string;
};
const Home = ({ browserTitle }: Props) => {
  return (
    <>
      <Head>
        <title>{browserTitle}</title>
      </Head>
      <Hero />
      <CategoriesSWR />
      <FeaturedSection
        BackgroundImageUrl="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
        Heading={
          <h2
            id="social-impact-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            <span className="block sm:inline">Level up</span>
            <span className="block sm:inline">your desk</span>
          </h2>
        }
        Description="Make your desk beautiful and organized. Post a picture to social media and watch it get more likes
                  than life-changing announcements. Reflect on the shallow nature of existence. At least you have a
                  really nice desk setup."
        CTAText="Shop Workspace"
        CTAUrl="#"
      />
      <section
        aria-labelledby="collection-heading"
        className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
      >
        <h2
          id="collection-heading"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Shop by Collection
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Each season, we collaborate with world-class designers to create a
          collection inspired by the natural world.
        </p>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {collections.map((collection) => (
            <a
              key={collection.name}
              href={collection.href}
              className="group block"
            >
              <div
                aria-hidden="true"
                className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
              >
                <img
                  src={collection.imageSrc}
                  alt={collection.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {collection.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {collection.description}
              </p>
            </a>
          ))}
        </div>
      </section>
      <FeaturedSection
        BackgroundImageUrl="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
        Heading={
          <h2
            id="comfort-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Simple productivity
          </h2>
        }
        Description="Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best
                  here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the
                  undeniable urge to fill empty circles."
        CTAText="Shop Focus"
        CTAUrl="#"
        classes="py-24 sm:py-32"
      />
    </>
  );
};

/**
 * The getInitialProps enables server-side rendering in a page and allows you to do initial data population,
 * it means sending the page with the data already populated from the server. This is especially useful for SEO.
 *
 * getInitialProps will disable Automatic Static Optimization
 */
Home.getInitialProps = async (context: DocumentContext) => {
  const browserTitle = "Home";
  return {
    browserTitle: browserTitle,
  };
};

export default Home;
