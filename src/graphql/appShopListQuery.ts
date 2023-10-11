import { gql } from "@apollo/client";

export const APP_SHOP_LIST = gql`
  query AppShopList {
    appShopList {
      id
      business_name
      business_profile
      business_address
      patent
      business_license
      province_city
      business_reg_no
      phone_number
    }
  }
`;
