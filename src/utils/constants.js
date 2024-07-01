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
};

export const userType = {
  ADMIN: "admin",
  MERCHANT: "merchant",
  BUYER: "buyer",
};

export const localLink = {
  TERMS_AND_CONDITIONS: "/assets/pdfs/ecom-terms-conditions.pdf",
  PRIVACY_POLICY: "/assets/pdfs/ecom-privacy-policy.pdf",
  JWT_SECRET: "$2b$10$8KMPRzUEQ.7flfiT7FVf3.4AKnerb9BsblPqanw.M44nOReKoh6wu",
  APP_AUTH_SECRET: "*ShapShapApp@2023*",
  // APP_BASE_PATH : "http://localhost:3000"
  APP_BASE_PATH: "https://shapshap-two.vercel.app",
};

export const logMessage = {
  USER_NOT_ACTIVE: "User is not active",
};

export const remoteLink = {
  EMAILJS_SERVICE_ID: "service_f3z6v9l",
  EMAILJS_TEMPLATE_ID: "template_0tdy18b",
  EMAILJS_USER_ID: "Yf_lK_yFNz6HCBta9",
  EMAILJS_ACCESS_TOKEN: "EWTrSEIOZZMKC9S4Oj1IY",
};

export const codePrefix = {
  MERCHANT: "MCT",
  BUYER: "BYR",
  EMAIL_VALIDATION: "EMV",
  RESET_PASSWORD_VALIDATION: "RPV",
};

// export const MONGODB_URI = 'mongodb://localhost:27017/shapshap'

export const MONGODB_URI =
  "mongodb+srv://princebak:princebak@bakil-free-cluster.oejtkcq.mongodb.net/shapshap?retryWrites=true&w=majority";
