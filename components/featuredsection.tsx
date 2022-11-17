import { classNames } from "@/lib/helper";
import React from "react";

type FeaturedSectionProperties = {
    Heading: JSX.Element,
    Description: string,
    CTAText: string;
    CTAUrl: string,
    BackgroundImageUrl: string,
    classes?: string
}

const FeaturedSection = (props: FeaturedSectionProperties) => {
    const classes = props.classes || '';
    return (
        <section
          aria-labelledby="social-impact-heading"
          className={classNames(['mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8', classes])}
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src={props.BackgroundImageUrl}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                {props.Heading}
                <p className="mt-3 text-xl text-white">
                  {props.Description}
                </p>
                <a
                  href={props.CTAUrl}
                  className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  {props.CTAText}
                </a>
              </div>
            </div>
          </div>
        </section>
    );
}

export default FeaturedSection;