import { Fragment } from "react"; 
// GLOBAL COMPONENTS

import Setting from "components/settings";
import Newsletter from "components/newsletter"; 
// LOCAL CUSTOM COMPONENTS

import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import Section7 from "../section-7";
import Section8 from "../section-8";
import Section9 from "../section-9";
import Section10 from "../section-10";
import Section11 from "../section-11";
import Section12 from "../section-12";
import Section13 from "../section-13";
export default function MarketOnePageView() {
  return <Fragment>
      {
      /* HERO SLIDER SECTION */
    }
      <Section1 />

      {
      /* FLASH DEALS SECTION */
    }
      <Section2 />

      {
      /* TOP CATEGORIES */
    }
      <Section3 />

      {
      /* TOP RATED PRODUCTS */
    }
      <Section4 />

      {
      /* NEW ARRIVAL LIST */
    }
      <Section5 />

      {
      /* BIG DISCOUNTS */
    }
      <Section12 />

      {
      /* CAR LIST */
    }
      <Section6 />

      {
      /* MOBILE PHONES */
    }
      <Section7 />

      {
      /* PROMO BANNERS */
    }
      <Section8 />

      {
      /* OPTICS / WATCH */
    }
      <Section13 />

      {
      /* CATEGORIES */
    }
      <Section9 />

      {
      /* MORE FOR YOU */
    }
      <Section10 />

      {
      /* SERVICE CARDS */
    }
      <Section11 />

      {
      /* POPUP NEWSLETTER FORM */
    }
      <Newsletter />

      {
      /* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */
    }
      <Setting />
    </Fragment>;
}