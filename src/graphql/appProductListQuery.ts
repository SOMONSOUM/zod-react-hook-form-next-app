import { gql } from "@apollo/client";

export const PRODUCT_LIST = gql`
  query AppProductList(
    $filter: AppProductFilter
    $paginationInput: PaginationInput
  ) {
    appProductList(filter: $filter, paginationInput: $paginationInput) {
      data {
        id
        product_name
        slug
        product_images {
          id
          image_url
          created_at
          updated_at
        }
        product_description
        price
        discounted_price
        discount
        categories {
          id
          parent_category_name
          parent_id
          category_name
          category_image
          slug
          created_at
          updated_at
        }
        created_by {
          id
          fullname
          user_profile
          phone_number
          email
        }
        is_active
        created_at
        updated_at
      }
      pagination {
        total
        size
        current
      }
    }
  }
`;
