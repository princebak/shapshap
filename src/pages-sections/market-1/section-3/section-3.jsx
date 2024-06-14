import Link from "next/link"; 
// CUSTOM ICON COMPONENT

import CategoryIcon from "icons/Category"; 
// GLOBAL CUSTOM COMPONENTS

import BazaarCard from "components/BazaarCard";
import { Carousel } from "components/carousel";
import { SectionCreator } from "components/section-header"; 
// LOCAL CUSTOM COMPONENT

import TopCategoriesCard from "../shared/top-categories-card"; 
// CUSTOM DATA MODEL


// API FUNCTIONS
import api from "utils/__api__/market-1";
export default async function Section3() {
  const categories = await api.getTopCategories();
  const responsive = [{
    breakpoint: 959,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 650,
    settings: {
      slidesToShow: 1
    }
  }];
  return <SectionCreator seeMoreLink="#" title="Top Categories" icon={<CategoryIcon color="primary" />}>
      <Carousel slidesToShow={3} responsive={responsive}>
        {categories.map(item => <Link href={`/products/search/${item.slug}`} key={item.id}>
            <BazaarCard elevation={0} className="p-1">
              <TopCategoriesCard title={item.name} imgUrl={item.image} subtitle={item.description} />
            </BazaarCard>
          </Link>)}
      </Carousel>
    </SectionCreator>;
}