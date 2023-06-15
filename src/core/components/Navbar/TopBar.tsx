import LanguageButton from "@/components/LanguageButton";

const TopBar = () => {
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="text-white">Social Media Links</div>
        <div className="text-white">Announcements</div>
        <LanguageButton />
      </div>
    </>
  );
};

export default TopBar;
