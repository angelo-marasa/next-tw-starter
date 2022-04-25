import NextAuth from "next-auth";
//import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
//import FacebookProvider from "next-auth/providers/facebook";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default (req, res) =>
	NextAuth(req, res, {
		adapter: PrismaAdapter(prisma),
		providers: [
			// GithubProvider({
			// 	clientId: process.env.GITHUB_CLIENT_ID,
			// 	clientSecret: process.env.GITHUB_CLIENT_SECRET
			// }),
			GoogleProvider({
				clientId: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET
			}),
			TwitterProvider({
				clientId: process.env.TWITTER_CLIENT_ID,
				clientSecret: process.env.TWITTER_CLIENT_SECRET,
				version: "2.0" // opt-in to Twitter OAuth 2.0
			})
			// FacebookProvider({
			// 	clientId: process.env.FACEBOOK_CLIENT_ID,
			// 	clientSecret: process.env.FACEBOOK_CLIENT_SECRET
			// })
		],
		debug: process.env.NODE_ENV === "development",
		secret: process.env.AUTH_SECRET,
		jwt: {
			secret: process.env.JWT_SECRET
		}
	});
