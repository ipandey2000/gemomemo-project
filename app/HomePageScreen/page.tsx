// app/homepage/page.tsx (or wherever your HomePageScreen is located)
"use client"
import withAuth from "../components/hoc/page";
import EvalationSection from "./EvalationSection/evalationSection";
import Footer from "./Footer/footer";
import MostTrending from "./MostTrending/mostTrending";
import CustomNavbar from "./Navbar/navbar";
import Sidebar from "./SideNavbar/sideNavbar";
import DaysGoneComponent from "./TopDayGoneSection/topDayGoneSection";
import VlationSection from "./valorantSection/valationSection";
import Warlords from "./WarlordsSection/warlordsSection";

const HomePageScreen: React.FC = () =>
{
  return (
    <div className="flex h-screen">
  
      <div className="border-r border-gray-300 w-16 md:w-20 lg:w-24">
        <Sidebar />
      </div>


      <div className="flex-1 overflow-y-auto">
        <CustomNavbar />
        <DaysGoneComponent />
        <MostTrending />
        <EvalationSection />
        <VlationSection />
        <Warlords />
        <Footer />
      </div>
    </div>
  );
};

export default withAuth( HomePageScreen ); 
