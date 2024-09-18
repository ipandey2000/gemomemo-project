// components/Routes/AppRoutes.js

import GamememoDetailsScreenPage from "../GemoDateDetails/gamememo-details";
import GamememoItemScreenPage from "../GemoMemoItemsPage/gamememo-items";
import HomePageScreen from "../HomePageScreen";
import Login from "../LoginPageForm/hb";

export default function AppRoutes() {
  return (
    <div className="bg-black">
      <HomePageScreen />
      <GamememoDetailsScreenPage />
      <GamememoItemScreenPage />
      <Login />
    </div>
  );
}
