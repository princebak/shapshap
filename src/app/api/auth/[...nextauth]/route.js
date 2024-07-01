import NextAuth from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import User from "models/User";
import { dbConnector } from "utils/dbConnector";
import {
  emailMetadata,
  localLink,
  logMessage,
  userStatus,
} from "utils/constants";
import { sendEmailWithEmailJs } from "services/NotificationService";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        console.log("******** credentials **********");
        console.log(credentials);

        await dbConnector();

        const user = await User.findOne({
          email: credentials.email,
        }).select("+password");

        console.log("User >> ", user);

        const { password, ...userWithoutPassword } = user._doc;

        if (!user) {
          throw new Error("Email is not registered");
        }

        if (user.status !== userStatus.ACTIVE) {
          await sendEmailWithEmailJs({
            receiver: user,
            subject: emailMetadata.SUBJECT_EMAIL_VALIDATION,
            validationLink: emailMetadata.EMAIL_VALIDATION_LINK,
          });

          throw new Error(logMessage.USER_NOT_ACTIVE);
        }

        const isPasswordCorrect = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Password is incorrect");
        }

        return userWithoutPassword;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      if (trigger === "update") {
        user = session.user;
      }
      user && (token.user = user);

      return token;
    },
    session: async ({ session, token }) => {
      const user = token.user;
      session.user = user;

      return session;
    },
  },
  jwt: {
    secret: localLink.JWT_SECRET,
  },
  secret: localLink.APP_AUTH_SECRET,
});

export { handler as GET, handler as POST };
