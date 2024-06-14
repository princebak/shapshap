import { Fragment } from "react"; 
// GLOBAL CUSTOM COMPONENTS

import Setting from "components/settings";
import Newsletter from "components/newsletter"; 
// LOCAL CUSTOM COMPONENTS

import Sidebar from "../sidebar";
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import Section7 from "../section-7";
import Section8 from "../section-8"; 
// API FUNCTIONS

import api from "utils/__api__/gift-shop";
export default async function GiftShopPageView() {
  const allProducts = await api.getAllProducts();
  const serviceList = await api.getServiceList();
  const topCategories = await api.getTopCategories();
  const carouselData = await api.getMainCarouselData();
  const popularProducts = await api.getPopularProducts();
  const topSailedProducts = await api.getTopSailedProducts();
  const categoryNavigation = await api.getCategoryNavigation();
  return <Fragment>
      {
      /* TOP HERO AREA */
    }
      <Section1 carouselData={carouselData} />

      {
      /* SIDEBAR WITH CONTENT */
    }
      <Sidebar navList={categoryNavigation}>
        {
        /* SERVICE LIST AREA */
      }
        <Section2 serviceList={serviceList} />

        {
        /* OFFER BANNER AREA */
      }
        <Section3 />

        {
        /* TOP CATEGORY AREA */
      }
        <div className="mt-2 mb-3 categories">
          <Section4 categoryList={topCategories} />
        </div>
      </Sidebar>

      {
      /* POPULAR PRODUCT AREA */
    }
      <Section5 products={popularProducts} />

      {
      /* TOP SALES PRODUCTS AREA */
    }
      <Section6 products={topSailedProducts} />

      {
      /* ALL PRODUCTS AREA */
    }
      <Section7 products={allProducts} />

      {
      /* SUMMER OFFER BANNER AREA */
    }
      <Section8 />

      {
      /* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */
    }
      <Setting />

      {
      /* POPUP NEWSLETTER FORM */
    }
      <Newsletter image="/assets/images/newsletter/bg-5.png" />
    </Fragment>;
}