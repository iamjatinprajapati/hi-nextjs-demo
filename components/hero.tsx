import { HeroProps } from "@/lib/types";
import React from "react";
import TopNavigation from "./topnavigation";

const Hero = ({
  title,
  description,
  ctaText,
  ctaHref,
  backgroundImage,
}: HeroProps) => {
  return (
    <div className="relative bg-gray-900">
      {/* Decorative image and overlay */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src={
            backgroundImage ??
            "https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
          }
          alt="hero-full-width"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 opacity-50"
      />

      <TopNavigation />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
        <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
          {title ? title : "New arrivals are here"}
        </h1>
        <p className="mt-4 text-xl text-white">
          {description ??
            "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in tock."}
        </p>
        <a
          href={ctaHref ?? "#"}
          className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          {ctaText ?? "Shop New Arrivals"}
        </a>
      </div>
    </div>
  );
};

export default Hero;
