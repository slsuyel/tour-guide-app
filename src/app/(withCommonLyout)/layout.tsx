import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import MobileBottomNavigation from "@/components/Common/MobileBottomNavigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <MobileBottomNavigation/>
    </>
  );
};

export default layout;
