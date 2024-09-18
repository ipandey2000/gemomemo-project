import GamememoDetailsScreenPage from "../GemoDateDetails/gamememoDeatils";
import GamememoItemScreenPage from "../GemoMemoItemsPage/gameemoItemPage";
import HomePageScreen from "../HomePageScreen/homePageScreen";
import Login from "../LoginPageForm/loginpage";
import { useRouter } from "next/router";
export default function Route ()
{
   const router = useRouter();
    const { pathname } = router;

    return (
        <div className="bg-black">
            {pathname === "/home" && <HomePageScreen />}
            {pathname === "/gamememo-details" && <GamememoDetailsScreenPage />}
            {pathname === "/gamememo-items" && <GamememoItemScreenPage />}
        </div>
    );
}
