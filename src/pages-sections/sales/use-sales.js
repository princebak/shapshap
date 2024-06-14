import { useEffect, useState } from "react"; 
// TYPESCRIPT INTERFACE FOR DATA SHAPE


// SALES API FUNCTIONS
import api from "utils/__api__/sales";
export default function useSales(defaultSelectCategory = "women", fetchCategory = 0) {
  const PRODUCT_PER_PAGE = 28;
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(defaultSelectCategory); 
// HANDLE CHANGE PAGE

  const handlePageChange = (_, page) => setPage(page); 
// HANDLE THE CHANGE CATEGORY


  const handleCategoryChange = category => () => setSelectedCategory(category); 
// FETCH CATEGORIES FROM SERVER


  useEffect(() => {
    if (fetchCategory === 1) {
      api.getCategoriesTwo().then(data => setCategories(data));
    } else {
      api.getCategories().then(data => setCategories(data));
    }
  }, [fetchCategory]); 
// FETCH PRODUCTS FROM SERVER

  useEffect(() => {
    api.getProducts(page).then(data => setProductList(data));
  }, [page]);
  return {
    page,
    categories,
    productList,
    selectedCategory,
    PRODUCT_PER_PAGE,
    handlePageChange,
    handleCategoryChange
  };
}