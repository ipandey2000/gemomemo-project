"use client";

import EvalationSection from "../HomePageScreen/EvalationSection/evalationSection";
import Footer from "../HomePageScreen/Footer/footer";
import VlationSection from "../HomePageScreen/valorantSection/valationSection";
import Warlords from "../HomePageScreen/WarlordsSection/warlordsSection";
import FilterSidebar from "./FilterSection/filterSection";
import NavbarItemsScreen from "./NavbarScreen/navbarItemScreen";


export default function GamememoItemScreenPage ()
{
    return (
        <div className="flex-1">


            <NavbarItemsScreen />

            <FilterSidebar />

            <EvalationSection />
            <VlationSection />
            <Warlords />
            <Footer />

        </div>
    );
}
