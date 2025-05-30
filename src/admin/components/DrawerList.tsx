import * as React from "react";


import DrawerList from "../../admin seller/components/drawerList/DrawerList";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { Category } from "@mui/icons-material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
const menu = [
    {
        name: "Dashboard",
        path: "/admin",
        icon: <DashboardIcon className="text-[#292966]" />,
        activeIcon: <DashboardIcon className="text-white" />,
    },
    {
        name: "Coupons",
        path: "/admin/coupon",
        icon: <IntegrationInstructionsIcon className="text-[#292966]" />,
        activeIcon: <IntegrationInstructionsIcon className="text-white" />,
    },
    {
        name: "Add New Coupon",
        path: "/admin/add-coupon",
        icon: <AddIcon className="text-[#292966]" />,
        activeIcon: <AddIcon className="text-white" />,
    },
    {
        name: "Home Page",
        path: "/admin/home-grid",
        icon: <HomeIcon className="text-[#292966]" />,
        activeIcon: <HomeIcon className="text-white" />,
    },
    {
        name: "Electronics Category",
        path: "/admin/electronics-category",
        icon: <ElectricBoltIcon className="text-[#292966]r" />,
        activeIcon: <ElectricBoltIcon className="text-white" />,
    },
    {
        name: "Shop By Category",
        path: "/admin/shop-by-category",
        icon: <Category className="text-[#292966]" />,
        activeIcon: <Category className="text-white" />,
    },
    {
        name: "Deals",
        path: "/admin/deals",
        icon: <LocalOfferIcon className="text-[#292966]" />,
        activeIcon: <LocalOfferIcon className="text-white" />,
    },
   
];

const menu2 = [

    {
        name: "Account",
        path: "/seller/account",
        icon: <AccountBoxIcon className="text-[#292966]" />,
        activeIcon: <AccountBoxIcon className="text-white" />,
    },
    {
        name: "Logout",
        path: "/",
        icon: <LogoutIcon className="text-[#292966]" />,
        activeIcon: <LogoutIcon className="text-white" />,
    },

]

interface DrawerListProps{
    toggleDrawer?:any;
}

const AdminDrawerList = ({ toggleDrawer }: DrawerListProps) => {

    return (
        <>
            <DrawerList toggleDrawer={toggleDrawer} menu={menu} menu2={menu2}/>
        </>
    );
}; 

export default AdminDrawerList;
