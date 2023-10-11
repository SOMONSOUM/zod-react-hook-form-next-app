import { AppShopListDocument } from "@/src/__generated__/graphql";
import { client } from "@/src/apollo/client";
import { APP_SHOP_LIST } from "@/src/graphql";
import { useQuery } from "@apollo/client";

// async function getProducts() {
//   const res = await client.query({
//     query: AppShopListDocument,
//   });

//   return res;
// }

export default function Home() {
  // const { data } = await getProducts();
  const { data } = useQuery(APP_SHOP_LIST);
  console.log(data);
  return (
    <>
      <h2>hello</h2>
    </>
  );
}
