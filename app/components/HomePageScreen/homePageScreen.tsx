// HomePageScreen.js
"use client";

import Arens from "./Arens/arens";
import Bigbanner from "./BigBanner/bigbanner";
import EvalationSection from "./EvalationSection/evalationSection";
import FilterSidebar from "./FilterSection/filterSection";
import Legends from "./Legends/legends";
import MostTrending from "./MostTrending/mostTrending";
import CustomNavbar from "./Navbar/navbar";
import Sidebar from "./SideNavbar/sideNavbar";
import DaysGoneComponent from "./TopDayGoneSection/topDayGoneSection";

export default function HomePageScreen() {
  return (
    <div className="flex h-screen">
      {/* Sidebar with 5% width and right border */}
      <div className="border-r border-gray-300" style={{ width: "5%" }}>
        <Sidebar />
      </div>

      {/* Main content with 95% width */}
      <div style={{ width: "95%" }}>
        <CustomNavbar />
        <DaysGoneComponent />
        <MostTrending />
        <EvalationSection />
        <FilterSidebar />
        <Bigbanner />
        <Arens />
        <Legends />
      </div>
    </div>
  );
}
