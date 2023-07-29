import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";
import Section from "@/core/components/Section";
import Button from "@/core/components/Button";

type PageProps = {
  data: {
    id: number;
    img: string;
    name: string;
    price: number;
  }[];
};

export const getStaticProps: GetStaticProps<PageProps> = async ctx => {
  const data = [
    {
      id: 0,
      img: "/images/products/product6.jpg",
      name: "ITALIAN L SHAPE",
      price: 320.0,
    },
    {
      id: 1,
      img: "/images/products/product5.jpg",
      name: "DINING TABLE",
      price: 120.5,
    },
    {
      id: 2,
      img: "/images/products/product10.jpg",
      name: "SOFA",
      price: 620,
    },
  ];

  return {
    props: {
      data,
      ...(await serverSideTranslations(ctx.locale!, ["common", "checkout"])),
    },
  };
};

const Checkout: NextPage<PageProps> = ({ data }) => {
  const { t } = useTranslation("checkout");

  return (
    <>
      <NextSeo title={t("title") as string} />

      <Section>
        <div className="grid grid-cols-12 items-start pb-16 gap-6">
          <div className="col-span-8 border border-gray-200 p-4 rounded">
            <h4 className="text-lg font-medium capitalize mb-4">Items</h4>
            <div className="flex flex-col gap-4">
              {data.map(item => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded"
                >
                  <div className="w-28">
                    <Image
                      width={200}
                      height={150}
                      src={item.img}
                      alt={item.name}
                      className="w-full"
                    />
                  </div>
                  <div className="w-1/3">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">
                      {item.name}
                    </h2>
                  </div>
                  <div className="text-primary text-lg font-semibold">
                    ${item.price}
                  </div>

                  <Button variant="danger">
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-4 border border-gray-200 p-4 rounded">
            <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
              order summary
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <h5 className="text-gray-800 font-medium">
                    Italian shape sofa
                  </h5>
                  <p className="text-sm text-gray-600">Size: M</p>
                </div>
                <p className="text-gray-600">x3</p>
                <p className="text-gray-800 font-medium">$320</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <h5 className="text-gray-800 font-medium">
                    Italian shape sofa
                  </h5>
                  <p className="text-sm text-gray-600">Size: M</p>
                </div>
                <p className="text-gray-600">x3</p>
                <p className="text-gray-800 font-medium">$320</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <h5 className="text-gray-800 font-medium">
                    Italian shape sofa
                  </h5>
                  <p className="text-sm text-gray-600">Size: M</p>
                </div>
                <p className="text-gray-600">x3</p>
                <p className="text-gray-800 font-medium">$320</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <h5 className="text-gray-800 font-medium">
                    Italian shape sofa
                  </h5>
                  <p className="text-sm text-gray-600">Size: M</p>
                </div>
                <p className="text-gray-600">x3</p>
                <p className="text-gray-800 font-medium">$320</p>
              </div>
            </div>

            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
              <p>subtotal</p>
              <p>$1280</p>
            </div>

            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
              <p>shipping</p>
              <p>Free</p>
            </div>

            <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
              <p className="font-semibold">Total</p>
              <p>$1280</p>
            </div>

            <div className="flex items-center mb-4 mt-2">
              <input
                type="checkbox"
                name="aggrement"
                id="aggrement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
              />
              <label
                htmlFor="aggrement"
                className="text-gray-600 ml-3 cursor-pointer text-sm"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-primary">
                  terms & conditions
                </Link>
              </label>
            </div>

            <Button variant="primary" className="w-full">
              place order
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default renderWithLayout(Checkout, LayoutsENUM.MAIN);
