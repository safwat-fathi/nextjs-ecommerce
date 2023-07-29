import { ReactNode } from "react";

import ProfileSidebar from "@/components/ProfileSidebar";

import MainLayout from "../MainLayout";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div className="col-span-3">
          <ProfileSidebar />
        </div>
        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
          {children}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfileLayout;
