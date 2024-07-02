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
  BLOCKED: "blocked",
};

export const userTokenStatus = {
  UNUSED: "unused",
  USED: "used",
};

export const emailMetadata = {
  SUBJECT_EMAIL_VALIDATION: "Email validation",
  SUBJECT_RESET_PW_VALIDATION: "Reset password validation",
  SENDER_NAME: "ShapShap",
  EMAIL_VALIDATION_LINK: "/api/email-validation",
  RESET_PW_VALIDATION_LINK: "/api/reset-pw-validation",
/*   EMAIL_VALIDATION_LINK: "/login",
  RESET_PW_VALIDATION_LINK: "/reset-password", */
  
};

export const userType = {
  ADMIN: "admin",
  MERCHANT: "merchant",
  BUYER: "buyer",
};

export const localLink = {
  TERMS_AND_CONDITIONS: "/assets/pdfs/ecom-terms-conditions.pdf",
  PRIVACY_POLICY: "/assets/pdfs/ecom-privacy-policy.pdf",
  //APP_BASE_PATH: "http://localhost:3000",
  APP_BASE_PATH: "https://shapshap-two.vercel.app",
};

export const logMessage = {
  USER_NOT_ACTIVE: "User is not active",
};

export const codePrefix = {
  MERCHANT: "MCT",
  BUYER: "BYR",
  EMAIL_VALIDATION: "EMV",
  RESET_PASSWORD_VALIDATION: "RPV",
};
