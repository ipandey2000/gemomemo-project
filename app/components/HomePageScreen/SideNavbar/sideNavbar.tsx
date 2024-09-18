import
{
  HomeIcon,
  ChatBubbleBottomCenterTextIcon,
  CreditCardIcon,
  TrophyIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Logo from '../../../public/GQ.png'

const Sidebar = () =>
{
  return (
    <div className="h-screen w-16 md:w-20 lg:w-24 bg-gray-800 text-white flex flex-col">
      <div className="flex-grow">
        <ul className="mt-10">
          <Image src={Logo} alt="logo" className="h-10 w-10 mx-auto" />
          <div style={{ marginLeft: '17px', marginTop: '13px' }}>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <HomeIcon className="h-6 w-6 mr-3" />
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <ChatBubbleBottomCenterTextIcon className="h-6 w-6 mr-3" />
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <BuildingStorefrontIcon className="h-6 w-6 mr-3" />
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <CreditCardIcon className="h-6 w-6 mr-3" />
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <TrophyIcon className="h-6 w-6 mr-3" />
            </li>
          </div>
        </ul>
      </div>
      <span className="border-t border-gray-600 my-2"></span>
      <div className="flex items-center p-4 hover:bg-gray-700">
        <Cog6ToothIcon className="h-6 w-6 mr-3" />
      </div>
      <div className="flex items-center p-4 hover:bg-gray-700">
        <ArrowRightOnRectangleIcon className="h-6 w-6 mr-3" />
      </div>
    </div>
  );
};

export default Sidebar;
