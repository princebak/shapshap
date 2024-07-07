// LOCAL CUSTOM COMPONENT
import ProductForm from "../product-form";
import PageWrapper from "../../page-wrapper";
import { useSelector } from "react-redux";
export default function ProductCreatePageView() {
  const initialValues = {
    _id: null,
    name: "",
    brand: "",
    tags: "",
    stock: "",
    size: "",
    price: "",
    discount: "",
    categories: [],
    images: [],
    description: "",
  };
  return (
    <PageWrapper title="Add New Product">
      <ProductForm product={initialValues} />
    </PageWrapper>
  );
}
