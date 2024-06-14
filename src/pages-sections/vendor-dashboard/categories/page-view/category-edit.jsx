"use client"; 
// LOCAL CUSTOM COMPONENT

import CategoryForm from "../category-form";
import PageWrapper from "../../page-wrapper";
export default function EditCategoryPageView() {
  return <PageWrapper title="Edit Category">
      <CategoryForm />
    </PageWrapper>;
}