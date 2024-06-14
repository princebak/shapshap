import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
export default function useWishList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(+searchParams.get("page") || 1); 
// HANDLE CHANGE PAGINATION

  const handleChangePage = page => {
    setCurrentPage(page);
    router.push(`?page=${page}`);
  };

  return {
    currentPage,
    handleChangePage
  };
}