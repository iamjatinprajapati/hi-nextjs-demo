import { Fragment } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { classNames } from "@/lib/helper";
import Link from "next/link";
const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
  // categories: [
  //   {
  //     name: "Women",
  //     featured: [
  //       {
  //         name: "New Arrivals",
  //         href: "#",
  //         imageSrc:
  //           "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
  //         imageAlt:
  //           "Models sitting back to back, wearing Basic Tee in black and bone.",
  //       },
  //       {
  //         name: "Basic Tees",
  //         href: "#",
  //         imageSrc:
  //           "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
  //         imageAlt:
  //           "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
  //       },
  //       {
  //         name: "Accessories",
  //         href: "#",
  //         imageSrc:
  //           "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
  //         imageAlt:
  //           "Model wearing minimalist watch with black wristband and white watch face.",
  //       },
  //       {
  //         name: "Carry",
  //         href: "#",
  //         imageSrc:
  //           "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
  //         imageAlt:
  //           "Model opening tan leather long wallet with credit card pockets and cash pouch.",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Men",
  //     featured: [
  //       {
  //         name: "New Arrivals",
  //         href: "#",
  //         imageSrc:
  //           "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
  //         imageAlt:
  //           "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
  //       },
  //       {
  //         name: "Basic Tees",
  //         href: "#",
  //         imageSrc:
  //           "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
  //         imageAlt: "Model wearing light heather gray t-shirt.",
  //       },
  //       {
  //         name: "Accessories",
  //         href: "#",
  //         imageSrc:
  //           "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
  //         imageAlt:
  //           "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
  //       },
  //       {
  //         name: "Carry",
  //         href: "#",
  //         imageSrc:
  //           "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
  //         imageAlt:
  //           "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
  //       },
  //     ],
  //   },
  // ],
  pages: [
    { name: "Categories", href: "/categories" },
    { name: "Company", href: "/company" },
    { name: "About", href: "/about" },
  ],
};
const TopNavigation = () => {
  return (
    <header className="relative z-10">
      <nav aria-label="Top">
        {/* Top navigation */}
        <div className="bg-gray-900">
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-sm font-medium text-white hover:text-gray-100"
              >
                Sign in
              </a>
              <a
                href="#"
                className="text-sm font-medium text-white hover:text-gray-100"
              >
                Create an account
              </a>
            </div>
          </div>
        </div>

        {/* Secondary navigation */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <Link href="/">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=white"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* Flyout menus */}
                  <Popover.Group className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      {navigation.pages.map((page) => (
                        <Link
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-medium text-white"
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                  </Popover.Group>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button type="button" className="-ml-2 p-2 text-white">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                  <a href="#" className="ml-2 p-2 text-white">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Logo (lg-) */}
                <a href="#" className="lg:hidden">
                  <span className="sr-only">Your Company</span>
                  <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                    alt=""
                    className="h-8 w-auto"
                  />
                </a>

                <div className="flex flex-1 items-center justify-end">
                  <a
                    href="#"
                    className="hidden text-sm font-medium text-white lg:block"
                  >
                    Search
                  </a>

                  <div className="flex items-center lg:ml-8">
                    {/* Help */}
                    <a href="#" className="p-2 text-white lg:hidden">
                      <span className="sr-only">Help</span>
                      <QuestionMarkCircleIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </a>
                    <a
                      href="#"
                      className="hidden text-sm font-medium text-white lg:block"
                    >
                      Help
                    </a>

                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-8">
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <ShoppingBagIcon
                          className="h-6 w-6 flex-shrink-0 text-white"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-white">
                          0
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNavigation;
