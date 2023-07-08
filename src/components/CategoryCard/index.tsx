import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ imgSrc, label }: { imgSrc: string; label: string }) => {
  return (
    <div className="relative rounded-md overflow-hidden group h-64">
      <Image
        src={imgSrc}
        alt="category"
        className="w-full"
        width={100}
        height={100}
      />
      <Link
        href="#"
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
      >
        {label}
      </Link>
    </div>
  );
};

export default CategoryCard;
