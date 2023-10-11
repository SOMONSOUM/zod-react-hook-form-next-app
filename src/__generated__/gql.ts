/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query AppProductList(\n    $filter: AppProductFilter\n    $paginationInput: PaginationInput\n  ) {\n    appProductList(filter: $filter, paginationInput: $paginationInput) {\n      data {\n        id\n        product_name\n        slug\n        product_images {\n          id\n          image_url\n          created_at\n          updated_at\n        }\n        product_description\n        price\n        discounted_price\n        discount\n        categories {\n          id\n          parent_category_name\n          parent_id\n          category_name\n          category_image\n          slug\n          created_at\n          updated_at\n        }\n        created_by {\n          id\n          fullname\n          user_profile\n          phone_number\n          email\n        }\n        is_active\n        created_at\n        updated_at\n      }\n      pagination {\n        total\n        size\n        current\n      }\n    }\n  }\n": types.AppProductListDocument,
    "\n  query AppShopList {\n    appShopList {\n      id\n      business_name\n      business_profile\n      business_address\n      patent\n      business_license\n      province_city\n      business_reg_no\n      phone_number\n    }\n  }\n": types.AppShopListDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AppProductList(\n    $filter: AppProductFilter\n    $paginationInput: PaginationInput\n  ) {\n    appProductList(filter: $filter, paginationInput: $paginationInput) {\n      data {\n        id\n        product_name\n        slug\n        product_images {\n          id\n          image_url\n          created_at\n          updated_at\n        }\n        product_description\n        price\n        discounted_price\n        discount\n        categories {\n          id\n          parent_category_name\n          parent_id\n          category_name\n          category_image\n          slug\n          created_at\n          updated_at\n        }\n        created_by {\n          id\n          fullname\n          user_profile\n          phone_number\n          email\n        }\n        is_active\n        created_at\n        updated_at\n      }\n      pagination {\n        total\n        size\n        current\n      }\n    }\n  }\n"): (typeof documents)["\n  query AppProductList(\n    $filter: AppProductFilter\n    $paginationInput: PaginationInput\n  ) {\n    appProductList(filter: $filter, paginationInput: $paginationInput) {\n      data {\n        id\n        product_name\n        slug\n        product_images {\n          id\n          image_url\n          created_at\n          updated_at\n        }\n        product_description\n        price\n        discounted_price\n        discount\n        categories {\n          id\n          parent_category_name\n          parent_id\n          category_name\n          category_image\n          slug\n          created_at\n          updated_at\n        }\n        created_by {\n          id\n          fullname\n          user_profile\n          phone_number\n          email\n        }\n        is_active\n        created_at\n        updated_at\n      }\n      pagination {\n        total\n        size\n        current\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AppShopList {\n    appShopList {\n      id\n      business_name\n      business_profile\n      business_address\n      patent\n      business_license\n      province_city\n      business_reg_no\n      phone_number\n    }\n  }\n"): (typeof documents)["\n  query AppShopList {\n    appShopList {\n      id\n      business_name\n      business_profile\n      business_address\n      patent\n      business_license\n      province_city\n      business_reg_no\n      phone_number\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;