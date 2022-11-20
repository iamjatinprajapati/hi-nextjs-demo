import Hero from "@/components/hero";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <Hero />
      <div className="mx-auto max-w-7xl py-24">
        <h1 className="text-3xl font-bold">About us</h1>
        <p className="mt-2">This is static generation without data.</p>
      </div>
    </>
  );
};

export default About;
