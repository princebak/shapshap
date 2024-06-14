import { useEffect, useRef, useState, useTransition } from "react";
import api from "utils/__api__/products";
export default function useSearch() {
  const parentRef = useRef();
  const [_, startTransition] = useTransition();
  const [category, setCategory] = useState("*");
  const [resultList, setResultList] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("All Categories"); 
// HANDLE CHANGE THE CATEGORY

  const handleCategoryChange = cat => {
    setCategory(cat.value);
    setCategoryTitle(cat.title);
  }; 
// FETCH PRODUCTS VIA API


  const getProducts = async (searchText, category) => {
    const data = await api.searchProducts(searchText, category);
    setResultList(data);
  };

  const handleSearch = e => {
    startTransition(() => {
      const value = e.target?.value;
      if (!value) setResultList([]);else if (value && category !== "*") getProducts(value, category);else getProducts(value);
    });
  };

  const handleDocumentClick = () => setResultList([]);

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => window.removeEventListener("click", handleDocumentClick);
  }, []);
  return {
    category,
    parentRef,
    resultList,
    handleSearch,
    categoryTitle,
    handleCategoryChange
  };
}