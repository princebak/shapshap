const getMetadata = (title, description) => {
  return {
    title: title || "ShapShap225",
    description:
      description ||
      `ShapShap255 is a E-commerce platform with multiple Vendors.`,
    authors: [
      {
        name: "UI-LIB",
        url: "https://ui-lib.com",
      },
    ],
    keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
  };
};

export default getMetadata;
