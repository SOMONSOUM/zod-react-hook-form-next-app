"use server";

import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import { cookies } from "next/headers";

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const Cookie = cookies();

const httpLink = createUploadLink({
  uri: API_URL, // Server URL (must be absolute)
  credentials: "same-origin",
  fetchOptions: { cache: "no-store" },
});

const authLink = setContext((_, { headers }) => {
  const token = Cookie.get("token")?.value!;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  //@ts-ignore
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});
