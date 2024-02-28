import { getServerSession } from "next-auth";
import { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { AdapterUser } from "next-auth/adapters";
import jsonwebtoken from "jsonwebtoken";
import { Jwt } from "jsonwebtoken";
import { SessionInterface } from "@/comman.types";
console.log("setting clinet", process.env.GOOGLE_CLIENT_ID);
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // jwt: {
  //     encode : ({secret, token}) => {},
  //     decode: async ({secret, token}) =>{},
  // },
  theme: {
    colorScheme: "light",
    logo: "/logo.svg",
  },
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        return true;
      } catch (err: any) {
        console.log(err);
        return false;
      }
    },
  },
};

export const getCurrentUser = async () => {
  const session = (await getServerSession(authOptions)) as SessionInterface;
  return session;
};
