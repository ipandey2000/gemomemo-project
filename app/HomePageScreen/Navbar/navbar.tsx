import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Badge,
} from "@nextui-org/react";
import { BellIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

// SearchIcon Component
interface SearchIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={height || size}
    role="presentation"
    viewBox="0 0 24 24"
    width={width || size}
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);


const CustomNavbar = () => {
  return (
    <NextUINavbar isBordered>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full p-4">

        <NavbarContent className="flex items-center gap-6 flex-wrap">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <span className="hidden sm:inline">|</span>
          <NavbarItem>
            <Link href="#" aria-current="page" color="foreground">
              Game Store
            </Link>
          </NavbarItem>
          <span className="hidden sm:inline">|</span>
          <NavbarItem>
            <Link color="foreground" href="#">
              Leaderboard
            </Link>
          </NavbarItem>
        </NavbarContent>

        <div className="flex items-center gap-4 flex-wrap mt-2 sm:mt-0">
          <Input
            classNames={{
              base: "w-full sm:w-[230px] md:w-[300px] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="What are you looking for?"
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
            style={{ borderRadius: "20px" }}
          />
          <Badge color="secondary" shape="circle">
            <div className="border-2 border-gray rounded-full p-2 hover:border-gold">
              <BellIcon
                className="text-gray-500 cursor-pointer"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </Badge>
          <Badge color="secondary" shape="circle">
            <div className="border-2 border-gray rounded-full p-2 hover:border-gold">
              <ShoppingBagIcon
                className="text-gray-500 cursor-pointer"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </Badge>
          <Badge color="secondary" shape="circle">
            <div className="border-2 border-gray rounded-full p-2 hover:border-gold"></div>
          </Badge>
        </div>
      </div>
    </NextUINavbar>
  );
};

export default CustomNavbar;
