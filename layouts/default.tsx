import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Header from "@/components/header";
import TopNavigation from "@/components/topnavigation";
import Categories from "@/components/categories";
import FeaturedSection from "@/components/featuredsection";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

// const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
// const navigation = {
//   categories: [
//     {
//       name: 'Women',
//       featured: [
//         {
//           name: 'New Arrivals',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
//           imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//         },
//         {
//           name: 'Basic Tees',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
//           imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//         },
//         {
//           name: 'Accessories',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
//           imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
//         },
//         {
//           name: 'Carry',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
//           imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
//         },
//       ],
//     },
//     {
//       name: 'Men',
//       featured: [
//         {
//           name: 'New Arrivals',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
//           imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
//         },
//         {
//           name: 'Basic Tees',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
//           imageAlt: 'Model wearing light heather gray t-shirt.',
//         },
//         {
//           name: 'Accessories',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
//           imageAlt:
//             'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
//         },
//         {
//           name: 'Carry',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
//           imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
//         },
//       ],
//     },
//   ],
//   pages: [
//     { name: 'Company', href: '#' },
//     { name: 'Stores', href: '#' },
//   ],
// }

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

function classNames(classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}
type DefaultLayoutProps = {
  children: JSX.Element;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
