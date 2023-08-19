import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import renderWithLayout from "@/core/HOC/WithLayout";
import Typography from "@/core/components/Typography";
import Section from "@/core/components/Section";

import { LayoutsENUM } from "@/core/Layout";
import SizePicker from "@/core/components/Inputs/SizePicker";
import ColorPicker from "@/core/components/Inputs/ColorPicker";
import Quantity from "@/core/components/Inputs/Quantity";

// TODO: get product data query 'productId'
export const getServerSideProps: GetServerSideProps<any> = async ({
  locale,
  query,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "product"])),
    },
  };
};

const Product: NextPage<any> = () => {
  const { t } = useTranslation("product");

  return (
    <>
      <NextSeo title={t("title") as string} />

      <Section>
        <Typography size="xl">{t("title")}</Typography>
      </Section>

      <div className="container grid grid-cols-2 gap-6">
        <div>
          <Image
            width={200}
            height={200}
            src="/images/products/product1.jpg"
            alt="product"
            className="w-full"
          />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <Image
              width={200}
              height={200}
              src="/images/products/product2.jpg"
              alt="product2"
              className="w-full cursor-pointer border border-primary"
            />
            <Image
              width={200}
              height={200}
              src="/images/products/product3.jpg"
              alt="product2"
              className="w-full cursor-pointer border"
            />
            <Image
              width={200}
              height={200}
              src="/images/products/product4.jpg"
              alt="product2"
              className="w-full cursor-pointer border"
            />
            <Image
              width={200}
              height={200}
              src="/images/products/product5.jpg"
              alt="product2"
              className="w-full cursor-pointer border"
            />
            <Image
              width={200}
              height={200}
              src="/images/products/product6.jpg"
              alt="product2"
              className="w-full cursor-pointer border"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            Italian L Shape Sofa
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">Apex</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">Sofa</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">$45.00</p>
            <p className="text-base text-gray-400 line-through">$55.00</p>
          </div>

          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius
            eum reprehenderit dolore vel mollitia optio consequatur hic
            asperiores inventore suscipit, velit consequuntur, voluptate
            doloremque iure necessitatibus adipisci magnam porro.
          </p>

          <div className="pt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
            <SizePicker />
          </div>

          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Color
            </h3>
            <ColorPicker />
          </div>

          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            {/* <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div> */}
            <Quantity />
          </div>

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
            >
              <i className="fa-solid fa-bag-shopping"></i> Add to cart
            </a>
            <a
              href="#"
              className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
            >
              <i className="fa-solid fa-heart"></i> Wishlist
            </a>
          </div>

          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default renderWithLayout(Product, LayoutsENUM.MAIN);
