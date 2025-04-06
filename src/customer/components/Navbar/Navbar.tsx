import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { mainCategory } from "../../../data/category/mainCategory";
import CategorySheet from "./CategorySheet";
import DrawerList from "./DrawerList";
import { useNavigate, useSearchParams } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { fetchUserProfile } from "../../../Redux Toolkit/Customer/UserSlice";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FavoriteBorder } from "@mui/icons-material";


const Navbar = () => {
  const [showSheet, setShowSheet] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("men");
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const dispatch = useAppDispatch();
  const { user, auth, cart, sellers } = useAppSelector((store) => store);
  const navigate = useNavigate();
  

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };



  const becomeSellerClick = () => {
    if (sellers.profile?.id) {
      navigate("/seller")
    } else navigate("/become-seller")
  }

 

  return (
    <Box
      sx={{ zIndex: 2 }}
      className="sticky top-0 left-0 right-0 bg-[white] blur-bg bg-opacity-80 "
    >
      <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
        <div className="flex items-center gap-9">
          <div className="flex items-center gap-2">
            {!isLarge && (
              <IconButton onClick={() => toggleDrawer(true)()}>
                <MenuIcon className="text-gray-700" sx={{ fontSize: 29 }} />
              </IconButton>
            )}
            <h1
              onClick={() => navigate("/")}
              className="logo cursor-pointer text-lg md:text-2xl  text-[#292966]"
            >
              Ecommerce Virtual Try-On
            </h1>
          </div>

          {isLarge && (
            <ul
              className="flex it
          ems-center font-medium text-[#292966] "
            >
              {mainCategory.map((item) => (
                <li
                  onMouseLeave={() => {
                    // setSelectedCategory("")
                    setShowSheet(false);
                  }}
                  onMouseEnter={() => {
                    setSelectedCategory(item.categoryId);
                    setShowSheet(true);
                  }}
                  className="mainCategory hover:text-[#292966] cursor-pointer hover:border-b-2 h-[70px] px-4 border-[#292966] flex items-center"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex gap-1 lg:gap-6 items-center">
          <IconButton onClick={()=>navigate("/search-products")}
            sx={{ color: "#16415c" }}>
            <SearchIcon className="text-[#292966]" sx={{ fontSize: 29 }} />
          </IconButton>

          {user.user ? (
            <Button
              onClick={() => navigate("/account/orders")}
              className="flex items-center gap-2"
            >
              <Avatar
                sx={{ width: 29, height: 29 }}
                // src="https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg"
                src="https://res.cloudinary.com/dngjbc4qx/image/upload/v1743964751/boy_br9a7h.png"
                // src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc0abe627/homepage/ShopByGender/Woman.jpg"
              />
              <h1 className="font-semibold text-[#292966] hidden lg:block">
                {user.user?.fullName?.split(" ")[0]}
              </h1>
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ backgroundColor: "#292966", color: "#fff", '&:hover': { backgroundColor: "#5c5c99" } }}
              startIcon={<AccountCircleIcon sx={{ fontSize: "12px" }} />}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}

          <IconButton onClick={()=>navigate("/wishlist")} sx={{ color: "#292966" }}>
            <FavoriteBorder sx={{ fontSize: 29 }}
                className="text-[#292966]" />
          </IconButton>

          <IconButton onClick={() => navigate("/cart")} sx={{ color: "#292966" }}>
            <Badge badgeContent={cart.cart?.cartItems.length} color="primary">
              <AddShoppingCartIcon
                sx={{ fontSize: 29 }}
                className="text-[#292966]"
              />
            </Badge>
          </IconButton>

          {isLarge && (
            <Button
              onClick={becomeSellerClick}
              startIcon={<StorefrontIcon />}
              variant="outlined"
              sx={{
                color: "#292966", // Text color
                borderColor: "#292966", // Border color
                '&:hover': {
                  backgroundColor: "#292966", // Background color on hover
                  color: "#fff", // Text color on hover
                  borderColor: "#292966", // Border color on hover
                },
              }}
            >
              Become Seller
            </Button>
          )}
        </div>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {<DrawerList toggleDrawer={toggleDrawer} />}
      </Drawer>
      {showSheet && selectedCategory && (
        <div
          onMouseLeave={() => setShowSheet(false)}
          onMouseEnter={() => setShowSheet(true)}
          className="categorySheet absolute top-[4.41rem] left-20 right-20 "
        >
          <CategorySheet
            setShowSheet={setShowSheet}
            selectedCategory={selectedCategory}
          />
        </div>
      )}
    </Box>
  );
};

export default Navbar;
