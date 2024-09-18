
"use client";

import NavbarItemsScreen from "../GemoMemoItemsPage/NavbarScreen/navbarItemScreen";
import Footer from "../HomePageScreen/Footer/footer";
import Arens from "./Arens/arens";
import LeagendOfLegendes from "./LeageOfLegends/leagesOfLegends";
import NameScreen from "./NameScreen/nameScreen";
import ReviewSection from "./ReviewSection/reviewSection";




export default function GamememoDetailsScreenPage ()
{
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
}
