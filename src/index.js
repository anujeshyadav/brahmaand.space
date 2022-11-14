import React from "react";
import ReactDOM from "react-dom";
// Fonts
import "./assets/fonts/Arial/Arial.ttf";
import "./assets/fonts/Arial/Arial Bold.ttf";
import "./assets/fonts/DIN Alternate/DIN Alternate Bold.ttf";
import "./assets/fonts/DIN Condensed/DIN Condensed Bold.ttf";
import "./assets/fonts/Futura/Futura.ttc";
import "./assets/fonts/MyriadPro/MyriadPro-Regular.otf";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Import Pages
import Landing from "./pages/index";
import CreateAccount from "./pages/";
// import Myaccount from "../src/components/Myaccount.jsx";

// import UserAccountInfo from "./pages/UserAccountInfo";
import Service from "./pages/service";
import Logout from "./pages/logout";
import ResetPasswordComponent from "./components/ResetPasswordComponent";
import SendRequestResetPasswordComponent from "./pages/send-reset-password";
import MultiModule from "./components/homepages/MultiModule";
import Home from "./components/home/Home";
import Activity from "./components/Account";
import Blog from "./components/Blog";
import Bookmarks from "./components/Bookmarks";
import Points from "./components/Points";
import ProfileRouter from "./components/ProfileRouter";
import TopBar from "./components/TopBar";
import VideoPosted from "./components/VideoPosted";
import ProductList from "./components/filter/ProductList";
import AutoSearch from "./components/filter/AutoSearch";
import Privacy from "./components/Privacy";
import TermsConditions from "./components/TermsConditions";
import ContactUs from "./components/home/ContactUs";
import Work from "./components/Work";
import Allcategory from "./components/home/Allcategory";
import AllSubCategory from "./components/home/AllSubCategory";
import Notification from "./components/Notification";
import Paginationnew from "./components/Paginationnew";
import Blogdescription from "../src/components/Blogdescription";
import DemoPaginate from "./components/DemoPaginate";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";

import Layout from "./components/Layout";
import LeaderBoard from "./components/home/LeaderBoard";
// Import Context
import { MenuProvider } from "./context/MenuContext";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "reactstrap";
import Signup from "./components/Signup";
import Login from "./components/Login.jsx";
import Myaccount from "./components/Myaccount";
// import Searchfiltermodel from "./components/filter/Searchfiltermodel";
import FAQ from "./components/FAQ";

const rootElement = document.getElementById("root");
render(
  <Router>
    <AuthProvider>
      <MenuProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/myaccount" element={<Myaccount />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/multiModule" element={<MultiModule />} />
            <Route exact path="/navbar" element={<Navbar />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/topBar" element={<TopBar />} />
            <Route exact path="/videoPosted" element={<VideoPosted />} />
            <Route exact path="/profileRouter" element={<ProfileRouter />} />
            <Route exact path="/Bookmark" element={<Bookmarks />} />
            <Route exact path="/demopaginate" element={<DemoPaginate />} />
            <Route exact path="/pagination" element={<Pagination />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/paginationnew" element={<Paginationnew />} />

            <Route
              exact
              path="/blogdescription/:id"
              element={<Blogdescription />}
            />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/leaderBoard" element={<LeaderBoard />} />
            <Route exact path="/productList/:id" element={<ProductList />} />
            <Route exact path="/autoSearch" element={<AutoSearch />} />
            <Route exact path="/privacy" element={<Privacy />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/allcategory" element={<Allcategory />} />
            <Route exact path="/subcategory/:id" element={<AllSubCategory />} />
            <Route exact path="/contactUs" element={<ContactUs />} />
            <Route exact path="/notification" element={<Notification />} />
            <Route
              exact
              path="/termsConditions"
              element={<TermsConditions />}
            />
            <Route
              path="reset-password/:uid/:token"
              element={<ResetPasswordComponent />}
            />
            <Route
              path="send-reset-password-request"
              element={<SendRequestResetPasswordComponent />}
            />
          </Routes>
        </Layout>
      </MenuProvider>
    </AuthProvider>
  </Router>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
