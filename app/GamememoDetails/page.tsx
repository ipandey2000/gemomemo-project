"use client";

import NavbarItemsScreen from "../GemoMemoItemsPage/NavbarScreen/navbarItemScreen";
import Footer from "../HomePageScreen/Footer/footer";
import withAuth from "../components/hoc/withAuth";
import Arens from "./Arens/arens";
import LeagendOfLegendes from "./LeageOfLegends/leagesOfLegends";
import NameScreen from "./NameScreen/nameScreen";
import ReviewSection from "./ReviewSection/reviewSection";

const GamememoDetailsScreenPage: React.FC = () => {
  return (
    <div className="flex-1 ">
      <NavbarItemsScreen />

      <LeagendOfLegendes />
      <NameScreen />
      <Arens />
      <ReviewSection />

      <Footer />
    </div>
  );
};
export default withAuth(GamememoDetailsScreenPage);
