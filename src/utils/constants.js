export const layoutConstant = {
  topbarHeight: 40,
  headerHeight: 80,
  mobileNavHeight: 64,
  containerWidth: 1200,
  mobileHeaderHeight: 64,
  grocerySidenavWidth: 280,
};

export const userStatus = {
  CREATED: "created",
  ACTIVE: "active",
  VALIDATED: "validated",
  BLOCKED: "blocked",
};

export const userTokenStatus = {
  UNUSED: "unused",
  PENDING: "pending",
  USED: "used",
  REFRESHED: "refreshed",
  EXPIRED: "expired",
};

export const productStatus = {
  CREATED: "created",
  PUBLISHED: "published",
  UNPUBLISHED: "unpublished",
};

export const paymentStatus = {
  UNPAID: "unpaid",
  PAID: "paid",
  CANCELLED: "cancelled",
};

export const deliveryStatus = {
  IN_STORE: "in-store",
  ON_THE_WAY: "on-the-way",
  DELIVERED: "delivered",
};

export const paymentMethod = {
  CREDIT_DEBIT: "credit/debit",
  PAYPAL: "paypal",
  CASH: "cash",
};

export const emailMetadata = {
  SUBJECT_EMAIL_VALIDATION: "Email validation",
  SUBJECT_RESET_PW_VALIDATION: "Reset password validation",
  SENDER_NAME: "ShapShap",
  EMAIL_VALIDATION_LINK: "/api/email-validation",
  RESET_PW_VALIDATION_LINK: "/api/reset-pw-validation",
};

export const userType = {
  ADMIN: "admin",
  MERCHANT: "merchant",
  BUYER: "buyer",
  DRIVER: "driver",
};

export const localLink = {
  TERMS_AND_CONDITIONS: "/assets/pdfs/ecom-terms-conditions.pdf",
  PRIVACY_POLICY: "/assets/pdfs/ecom-privacy-policy.pdf",
  // APP_BASE_PATH: "http://localhost:3000",
  APP_BASE_PATH: "https://shapshap-two.vercel.app",
};

export const remoteLink = {
  COULDINARY_UPLOAD_LINK:
    "https://api.cloudinary.com/v1_1/pribakil/image/upload",
};

export const logMessage = {
  USER_NOT_ACTIVE:
    "User is not active, click on the validation link in your mail box please.",
};

export const codePrefix = {
  MERCHANT: "MCT",
  BUYER: "BYR",
  EMAIL_VALIDATION: "EMV",
  RESET_PASSWORD_VALIDATION: "RPV",
};

export const productCategories = [
  "Men",
  "Women",
  "Baby",
  "Clothes",
  "Furniture",
  "Sport",
  "Automobile",
  "Accessories",
  "Eelctronics",
  "Hardware",
  "Cosmetics",
];

export const fees = {
  COMMISSION: 0,
  SHIPPING: 0,
  TAX: 0,
};

export const PAGE_LIMIT = 5;
export const TOKEN_VALIDITY = 10; // set to 30 munites in prod
