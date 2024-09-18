// app/gamememo-items/page.tsx
import withAuth from "../components/hoc/withAuth";
import EvalationSection from "../HomePageScreen/EvalationSection/evalationSection";
import Footer from "../HomePageScreen/Footer/footer";
import VlationSection from "../HomePageScreen/valorantSection/valationSection";
import Warlords from "../HomePageScreen/WarlordsSection/warlordsSection";
import FilterSidebar from "./FilterSection/filterSection";
import NavbarItemsScreen from "./NavbarScreen/navbarItemScreen";

const GamememoItemScreenPage: React.FC = () => {
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
};

export default withAuth(GamememoItemScreenPage); // Protect GamememoItemScreenPage
