import Link from "next/link";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Welcome to our E-commerce Store
          </h1>
          <p className="text-lg lg:text-2xl mb-8 text-center">
            Discover amazing products at unbeatable prices.
          </p>
          <Link
            href="/shop"
            // className="transition bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg font-medium"
          >
            <Button>Shop Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
