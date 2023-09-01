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
import HttpClient from "@/core/lib/http-client";
import { ROUTES } from "@/routes";
import { IProduct } from "@/types/i-product";
import { IBaseSingleResponse } from "@/types/i-base-response";
import Rating from "@/core/components/Rating";

const httpClient = new HttpClient();

// TODO: get product data query 'slug'
export const getServerSideProps: GetServerSideProps<any> = async ctx => {
  const { locale, query } = ctx;

  try {
    const slug = query.slug;

    const productData = await httpClient.get<IBaseSingleResponse<IProduct>>(
      ROUTES.products.getProduct(slug as string)
    );

    return {
      props: {
        ...(await serverSideTranslations(locale!, ["common", "product"])),
        product: productData.data,
      },
    };
  } catch (error: any) {
    // const statusCode = error?.response?.status === 404 ? 404 : 500;
    const statusCode = error?.response?.status;

    return {
      redirect: {
        // destination: `/${statusCode}?error=${errMsg}`,
        destination: `/${statusCode}`,
        permanent: false,
      },
    };
  }
};

const Product: NextPage<any> = ({ product }: { product: IProduct }) => {
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
            // src="/images/products/product1.jpg"
            src={product.thumbnail}
            alt="product"
            className="w-full"
          />
          <div className="grid grid-cols-5 gap-4 mt-4">
            {product.images.map(img => (
              <Image
                key={img}
                width={200}
                height={200}
                // src="/images/products/product2.jpg"
                src={img}
                alt="product2"
                className="w-full cursor-pointer border border-primary"
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            {product.name}
          </h2>
          <div className="flex items-center mb-4">
            <Rating rating={product.rating} />
            {/* <div className="flex gap-1 text-sm text-yellow-400">
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
            </div> */}
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">
                {product.stock > 0 ? "In stock" : "Out of stock"}
              </span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">{product.brand}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              {product.categories.map(category => (
                <span className="text-gray-600">{category}</span>
              ))}
            </p>
            {/* <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">{product.}</span>
            </p> */}
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">
              {product.price}$
            </p>
            <p className="text-base text-gray-400 line-through">$55.00</p>
          </div>

          <p className="mt-4 text-gray-600">{product.description}</p>

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
