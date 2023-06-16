import LanguageButton from "@/components/LanguageButton";
import Link from "next/link";
import { useRouter } from "next/router";
import LanguageSwitcher from "../LanguageSwitcher";

const TopBar = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="text-white">Social Media Links</div>
        <div className="text-white">Announcements</div>
        {/* <LanguageButton /> */}
        <LanguageSwitcher />
      </div>
    </>
  );
};

export default TopBar;
