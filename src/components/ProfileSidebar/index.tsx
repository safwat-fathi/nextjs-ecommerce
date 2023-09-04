import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import {
  faBoxArchive,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCreditCard,
  faHeart,
  faAddressCard,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Button from "@/core/components/Button";
import AuthService from "@/services/auth.service";
import { notify, removeStorage } from "@/core/lib/utils";
import CONSTANTS from "@/constants";
import { deleteCookie } from "cookies-next";
import { useTranslation } from "react-i18next";

const ProfileSidebar = () => {
  const router = useRouter();

  const { t } = useTranslation("profile");

  const isAccount =
    router.asPath.includes("info") ||
    router.asPath.includes("addresses") ||
    router.asPath.includes("change-password");
  const isHistory =
    router.asPath.includes("returns") ||
    router.asPath.includes("cancellations") ||
    router.asPath.includes("reviews");
  const isPaymentMethods = router.asPath.includes("payment-methods");
  const isWishlist = router.asPath.includes("wishlist");

  const authService = new AuthService();

  useEffect(() => {
    // remove query params from URL
    const pathWithoutQuery = router.asPath.split("?")[0];

    // convert URL path to array
    let pathArray = pathWithoutQuery.split("/");
    // remove first item in array
    pathArray.shift();
    // remove any empty path
    pathArray = pathArray.filter(path => path !== "");
    // console.log("🚀 ~ useEffect ~ pathArray:", pathArray);
  }, [router.asPath]);

  const handleLogout = async () => {
    try {
      await authService.logout();

      removeStorage(CONSTANTS.IS_AUTHENTICATED);
      removeStorage(CONSTANTS.USER);
      removeStorage(CONSTANTS.ACCESS_TOKEN);

      deleteCookie(CONSTANTS.ACCESS_TOKEN);
      deleteCookie(CONSTANTS.USER);
      deleteCookie(CONSTANTS.IS_AUTHENTICATED);

      notify(
        t("success-logout"),
        "success",
        router.locale === "ar" ? "top-left" : "top-right"
      );

      router.push("/");
    } catch (error) {
      console.error(`Error@handleLogout ${error}`);
    }
  };

  return (
    <>
      <div className="px-4 py-3 shadow flex items-center gap-4">
        <div className="flex-shrink-0">
          <Image
            width={50}
            height={50}
            src="/images/avatar.png"
            alt="profile avatar"
            className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
          />
        </div>
        <div className="flex-grow">
          <p className="text-gray-600">Hello,</p>
          <h4 className="text-gray-800 font-medium">John Doe</h4>
        </div>
      </div>

      <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
        <div className="space-y-1 pl-8">
          <p
            className={clsx("flex gap-4 items-center font-medium capitalize", {
              "text-primary": isAccount,
            })}
          >
            <FontAwesomeIcon width={15} height={15} icon={faAddressCard} />
            Manage account
          </p>
          <Link
            href="/profile/info"
            className="flex gap-4 items-center hover:text-primary capitalize transition"
          >
            Profile information
          </Link>
          <Link
            href="/profile/addresses"
            className="flex gap-4 items-center hover:text-primary capitalize transition"
          >
            Manage addresses
          </Link>
          <Link
            href="/profile/change-password"
            className="flex gap-4 items-center hover:text-primary capitalize transition"
          >
            Change password
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <p
            className={clsx("flex gap-4 items-center font-medium capitalize", {
              "text-primary": isHistory,
            })}
          >
            <FontAwesomeIcon width={15} height={15} icon={faBoxArchive} />
            My history
          </p>
          <Link
            href="/profile/returns"
            className="flex gap-4 items-center hover:text-primary capitalize transition"
          >
            My returns
          </Link>
          <Link
            href="/profile/cancellations"
            className="flex gap-4 items-center hover:text-primary capitalize transition"
          >
            My Cancellations
          </Link>
          <Link
            href="/profile/reviews"
            className="flex gap-4 items-center hover:text-primary capitalize transition"
          >
            My reviews
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <Link
            href="/profile/payment-methods"
            // className="flex gap-4 items-center hover:text-primary font-medium capitalize transition"
            className={clsx("flex gap-4 items-center font-medium capitalize", {
              "text-primary": isPaymentMethods,
              "hover:text-primary ": !isPaymentMethods,
            })}
          >
            <FontAwesomeIcon width={15} height={15} icon={faCreditCard} />
            Payment methods
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <Link
            href="/profile/wishlist"
            className={clsx("flex gap-4 items-center font-medium capitalize", {
              "text-primary": isWishlist,
              "hover:text-primary ": !isWishlist,
            })}
          >
            <FontAwesomeIcon width={15} height={15} icon={faHeart} />
            My wishlist
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <Button
            onClick={handleLogout}
            className="flex gap-4 items-center hover:text-primary font-medium capitalize transition"
          >
            <FontAwesomeIcon width={15} height={15} icon={faRightFromBracket} />
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
