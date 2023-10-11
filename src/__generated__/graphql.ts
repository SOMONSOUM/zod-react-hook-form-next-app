/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AdminCategoryList = {
  __typename?: 'AdminCategoryList';
  data?: Maybe<Array<Maybe<Category>>>;
  pagination?: Maybe<Pagination>;
};

export type AdminProductFilter = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  product_name?: InputMaybe<Scalars['String']['input']>;
};

export type AdminProductList = {
  __typename?: 'AdminProductList';
  data?: Maybe<Array<Maybe<Product>>>;
  pagination?: Maybe<Pagination>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  documentInfo?: Maybe<Scalars['JSON']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  info?: Maybe<Scalars['JSON']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Role>;
  status?: Maybe<Status>;
  userProfile?: Maybe<Scalars['String']['output']>;
};

export type AdminUserBusinessInput = {
  planId?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminUserIndividualInput = {
  planId?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminUserInput = {
  documentInfo?: InputMaybe<Scalars['JSON']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<Scalars['JSON']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  userProfile?: InputMaybe<Scalars['String']['input']>;
};

export type AdminUserList = {
  __typename?: 'AdminUserList';
  data?: Maybe<Array<Maybe<AdminUser>>>;
  pagination?: Maybe<Pagination>;
};

export type AdminUserListPlanTypeInput = {
  planId?: InputMaybe<Scalars['Int']['input']>;
};

export type AmountUsers = {
  __typename?: 'AmountUsers';
  count?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['String']['output']>;
};

export type AmountUsersInMonth = {
  __typename?: 'AmountUsersInMonth';
  count?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['String']['output']>;
};

export type AppCategoryList = {
  __typename?: 'AppCategoryList';
  data?: Maybe<Array<Maybe<Category>>>;
  pagination?: Maybe<Pagination>;
};

export type AppCategoryNested = {
  __typename?: 'AppCategoryNested';
  data?: Maybe<Array<Maybe<CategoryNested>>>;
  pagination?: Maybe<Pagination>;
};

export type AppProduct = {
  __typename?: 'AppProduct';
  categories?: Maybe<Array<Maybe<Category>>>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<ProductDetailOwner>;
  discount?: Maybe<Scalars['String']['output']>;
  discounted_price?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  product_description?: Maybe<Scalars['String']['output']>;
  product_images?: Maybe<Array<Maybe<Image>>>;
  product_name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type AppProductFilter = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  order_price?: InputMaybe<AppProductFilterOrderPrice>;
  product_name?: InputMaybe<Scalars['String']['input']>;
  seller_id?: InputMaybe<Scalars['Int']['input']>;
};

export enum AppProductFilterOrderPrice {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type AppProductList = {
  __typename?: 'AppProductList';
  data?: Maybe<Array<Maybe<AppProduct>>>;
  pagination?: Maybe<Pagination>;
};

export type AssignRoleInput = {
  roleId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type BusinessUpdateStatusInput = {
  status?: InputMaybe<Status>;
};

export type Category = {
  __typename?: 'Category';
  category_image?: Maybe<Scalars['String']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  parent_category_name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type CategoryFilter = {
  category_name?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryInput = {
  category_image?: InputMaybe<Scalars['String']['input']>;
  category_name?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryNested = {
  __typename?: 'CategoryNested';
  category_image?: Maybe<Scalars['String']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Category>>>;
  created_at?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  parent_category_name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type ChangePasswordAdminUserInput = {
  confirmPassword?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
};

export type ChangePasswordUserInput = {
  confirmPassword?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
};

export type CreateNewPasswordUserInput = {
  confirmPassword?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
};

export type Dashboard = {
  __typename?: 'Dashboard';
  total_categories?: Maybe<Scalars['Int']['output']>;
  total_products?: Maybe<Scalars['Int']['output']>;
  total_users?: Maybe<Scalars['Int']['output']>;
  total_users_accepted?: Maybe<Scalars['Int']['output']>;
  total_users_inreviewing?: Maybe<Scalars['Int']['output']>;
  total_users_pending?: Maybe<Scalars['Int']['output']>;
  total_users_rejected?: Maybe<Scalars['Int']['output']>;
};

export type ForgotPasswordUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type Image = {
  __typename?: 'Image';
  created_at?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type ImageInput = {
  image_url?: InputMaybe<Scalars['String']['input']>;
  upload_order?: InputMaybe<Scalars['Int']['input']>;
};

export type IndividualUpdateStatusInput = {
  status?: InputMaybe<Status>;
};

export type LoginAdminUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token?: Maybe<Scalars['String']['output']>;
};

export type ManageRolePermissionInput = {
  productModify?: InputMaybe<Scalars['Boolean']['input']>;
  productRead?: InputMaybe<Scalars['Boolean']['input']>;
  productRemove?: InputMaybe<Scalars['Boolean']['input']>;
  productWrite?: InputMaybe<Scalars['Boolean']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  remove?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  write?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Merchant = {
  __typename?: 'Merchant';
  id?: Maybe<Scalars['Int']['output']>;
  merchant_address?: Maybe<Scalars['String']['output']>;
  merchant_id_card?: Maybe<Scalars['String']['output']>;
  merchant_name?: Maybe<Scalars['String']['output']>;
  merchant_profile?: Maybe<Scalars['String']['output']>;
  merchant_selfie_national_id?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminCreateCategory: Scalars['Int']['output'];
  adminCreateProduct: Scalars['Int']['output'];
  adminRemoveCategory?: Maybe<Scalars['Boolean']['output']>;
  adminUpdateCategory?: Maybe<Scalars['Boolean']['output']>;
  adminUpdateProduct?: Maybe<Scalars['Boolean']['output']>;
  adminUserBusinessUpdateStatus?: Maybe<Ok>;
  adminUserIndividualUpdateStatus?: Maybe<Ok>;
  appChangePasswordUser?: Maybe<Ok>;
  appCreateNewPasswordUser?: Maybe<Ok>;
  appCreateProduct?: Maybe<Ok>;
  appForgotPasswordUser?: Maybe<Ok>;
  appLoginUser?: Maybe<LoginResponse>;
  appRegisterUser?: Maybe<Ok>;
  appRemoveProduct?: Maybe<Ok>;
  appUpdateMe?: Maybe<Ok>;
  appUpdateProduct?: Maybe<Ok>;
  appVerifyOTPUser?: Maybe<Ok>;
  assignRoleToAdminUser?: Maybe<Ok>;
  changePasswordAdminUser?: Maybe<Ok>;
  createAdminUser?: Maybe<Ok>;
  createRole?: Maybe<Ok>;
  createTest: Scalars['Int']['output'];
  loginAdminUser?: Maybe<LoginResponse>;
  manageRolePermission?: Maybe<Ok>;
  multipleImagesUpload?: Maybe<Array<Maybe<UploadImageResponse>>>;
  registerAdminUser?: Maybe<Ok>;
  updateAdminUser?: Maybe<Ok>;
  updateTest?: Maybe<Scalars['Boolean']['output']>;
  uploadDocument?: Maybe<Scalars['String']['output']>;
  uploadImage?: Maybe<Scalars['String']['output']>;
};


export type MutationAdminCreateCategoryArgs = {
  input?: InputMaybe<CategoryInput>;
};


export type MutationAdminCreateProductArgs = {
  input?: InputMaybe<ProductInput>;
};


export type MutationAdminRemoveCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationAdminUpdateCategoryArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<CategoryInput>;
};


export type MutationAdminUpdateProductArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<ProductInput>;
};


export type MutationAdminUserBusinessUpdateStatusArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<BusinessUpdateStatusInput>;
};


export type MutationAdminUserIndividualUpdateStatusArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<IndividualUpdateStatusInput>;
};


export type MutationAppChangePasswordUserArgs = {
  input?: InputMaybe<ChangePasswordUserInput>;
};


export type MutationAppCreateNewPasswordUserArgs = {
  input?: InputMaybe<CreateNewPasswordUserInput>;
};


export type MutationAppCreateProductArgs = {
  input?: InputMaybe<ProductInput>;
};


export type MutationAppForgotPasswordUserArgs = {
  input?: InputMaybe<ForgotPasswordUserInput>;
};


export type MutationAppLoginUserArgs = {
  input?: InputMaybe<UserLoginInput>;
};


export type MutationAppRegisterUserArgs = {
  input?: InputMaybe<RegisterUserInput>;
};


export type MutationAppRemoveProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationAppUpdateMeArgs = {
  input?: InputMaybe<UpdateMeInput>;
};


export type MutationAppUpdateProductArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<ProductInput>;
};


export type MutationAppVerifyOtpUserArgs = {
  input?: InputMaybe<VerifyOtpUserInput>;
};


export type MutationAssignRoleToAdminUserArgs = {
  input: AssignRoleInput;
};


export type MutationChangePasswordAdminUserArgs = {
  input?: InputMaybe<ChangePasswordAdminUserInput>;
};


export type MutationCreateAdminUserArgs = {
  input?: InputMaybe<AdminUserInput>;
};


export type MutationCreateRoleArgs = {
  input: RoleInput;
};


export type MutationCreateTestArgs = {
  input?: InputMaybe<TestInput>;
};


export type MutationLoginAdminUserArgs = {
  input?: InputMaybe<LoginAdminUserInput>;
};


export type MutationManageRolePermissionArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<ManageRolePermissionInput>;
};


export type MutationMultipleImagesUploadArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
};


export type MutationRegisterAdminUserArgs = {
  input?: InputMaybe<AdminUserInput>;
};


export type MutationUpdateAdminUserArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<AdminUserInput>;
};


export type MutationUpdateTestArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<TestInput>;
};


export type MutationUploadDocumentArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadImageArgs = {
  file: Scalars['Upload']['input'];
};

export type Ok = {
  __typename?: 'Ok';
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  current?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type Product = {
  __typename?: 'Product';
  categories?: Maybe<Array<Maybe<Category>>>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  product_description?: Maybe<Scalars['String']['output']>;
  product_image?: Maybe<Scalars['String']['output']>;
  product_name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type ProductDetailOwner = {
  __typename?: 'ProductDetailOwner';
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  user_profile?: Maybe<Scalars['String']['output']>;
};

export type ProductInput = {
  category_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  discount?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  product_description?: InputMaybe<Scalars['String']['input']>;
  product_image?: InputMaybe<Array<InputMaybe<ImageInput>>>;
  product_name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  adminCategoryDetail?: Maybe<Category>;
  adminCategoryList?: Maybe<AdminCategoryList>;
  adminDashBoard?: Maybe<Dashboard>;
  adminMe?: Maybe<AdminUser>;
  adminProductDetail?: Maybe<Product>;
  adminProductList?: Maybe<AdminProductList>;
  adminTotalUserRegister?: Maybe<TotalUserRegister>;
  adminUserBusinessDetail?: Maybe<UserBusiness>;
  adminUserBusinessList?: Maybe<Array<Maybe<UserBusiness>>>;
  adminUserDetail?: Maybe<AdminUser>;
  adminUserIndividualDetail?: Maybe<UserIndividual>;
  adminUserIndividualList?: Maybe<Array<Maybe<UserIndividual>>>;
  adminUserList?: Maybe<AdminUserList>;
  adminUserListByPlanType?: Maybe<AdminUserList>;
  appCategoryList?: Maybe<AppCategoryList>;
  appCategoryNested?: Maybe<AppCategoryNested>;
  appMe?: Maybe<User>;
  appMerchantDetail?: Maybe<Merchant>;
  appMerchantList?: Maybe<Array<Maybe<Merchant>>>;
  appPopularProductList?: Maybe<Array<Maybe<AppProduct>>>;
  appProductActiveList?: Maybe<AppProductList>;
  appProductDetail?: Maybe<AppProduct>;
  appProductInactiveList?: Maybe<AppProductList>;
  appProductList?: Maybe<AppProductList>;
  appRelatedProductList?: Maybe<AppProductList>;
  appShopDetail?: Maybe<Shop>;
  appShopList?: Maybe<Array<Maybe<Shop>>>;
  roleDetail?: Maybe<Role>;
  roleList?: Maybe<Array<Maybe<Role>>>;
  testDetail?: Maybe<Scalars['String']['output']>;
  testList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type QueryAdminCategoryDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminCategoryListArgs = {
  filter?: InputMaybe<CategoryFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAdminProductDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminProductListArgs = {
  filter?: InputMaybe<AdminProductFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAdminUserBusinessDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminUserBusinessListArgs = {
  input?: InputMaybe<AdminUserBusinessInput>;
};


export type QueryAdminUserDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminUserIndividualDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminUserIndividualListArgs = {
  input?: InputMaybe<AdminUserIndividualInput>;
};


export type QueryAdminUserListArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAdminUserListByPlanTypeArgs = {
  input?: InputMaybe<AdminUserListPlanTypeInput>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppCategoryListArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppCategoryNestedArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppMerchantDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAppProductActiveListArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppProductDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAppProductInactiveListArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppProductListArgs = {
  filter?: InputMaybe<AppProductFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppRelatedProductListArgs = {
  filter?: InputMaybe<AppProductFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppShopDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRoleDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTestDetailArgs = {
  id: Scalars['Int']['input'];
};

export type RegisterUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  userProfile?: InputMaybe<Scalars['String']['input']>;
};

export type Role = {
  __typename?: 'Role';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productModify?: Maybe<Scalars['Boolean']['output']>;
  productRead?: Maybe<Scalars['Boolean']['output']>;
  productRemove?: Maybe<Scalars['Boolean']['output']>;
  productWrite?: Maybe<Scalars['Boolean']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  remove?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  update?: Maybe<Scalars['Boolean']['output']>;
  write?: Maybe<Scalars['Boolean']['output']>;
};

export type RoleInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Shop = {
  __typename?: 'Shop';
  business_address?: Maybe<Scalars['String']['output']>;
  business_license?: Maybe<Scalars['String']['output']>;
  business_name?: Maybe<Scalars['String']['output']>;
  business_profile?: Maybe<Scalars['String']['output']>;
  business_reg_no?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  patent?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  province_city?: Maybe<Scalars['String']['output']>;
};

export enum Status {
  Approved = 'APPROVED',
  Inreview = 'INREVIEW',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type TestInput = {
  message?: InputMaybe<Scalars['String']['input']>;
};

export type TotalUserRegister = {
  __typename?: 'TotalUserRegister';
  total_users_individual?: Maybe<Scalars['Int']['output']>;
  total_users_register?: Maybe<Scalars['Int']['output']>;
  users_register_business_within1Year?: Maybe<Array<Maybe<AmountUsersInMonth>>>;
  users_register_business_within7Days?: Maybe<Array<Maybe<AmountUsers>>>;
  users_register_business_within30Days?: Maybe<Array<Maybe<AmountUsers>>>;
  users_register_individual_within1Year?: Maybe<Array<Maybe<AmountUsersInMonth>>>;
  users_register_individual_within7Days?: Maybe<Array<Maybe<AmountUsers>>>;
  users_register_individual_within30Days?: Maybe<Array<Maybe<AmountUsers>>>;
};

export type UpdateMeInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  userProfile?: InputMaybe<Scalars['String']['input']>;
};

export type UploadImageResponse = {
  __typename?: 'UploadImageResponse';
  image_url?: Maybe<Scalars['String']['output']>;
  upload_order?: Maybe<Scalars['Int']['output']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  userProfile?: Maybe<Scalars['String']['output']>;
};

export type UserBusiness = {
  __typename?: 'UserBusiness';
  created_at?: Maybe<Scalars['String']['output']>;
  document_info?: Maybe<Scalars['JSON']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  info?: Maybe<Scalars['JSON']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  plan_id?: Maybe<Scalars['Int']['output']>;
  plan_name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  user_profile?: Maybe<Scalars['String']['output']>;
};

export type UserIndividual = {
  __typename?: 'UserIndividual';
  created_at?: Maybe<Scalars['String']['output']>;
  document_info?: Maybe<Scalars['JSON']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  info?: Maybe<Scalars['JSON']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  plan_id?: Maybe<Scalars['Int']['output']>;
  plan_name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updated_at?: Maybe<Scalars['String']['output']>;
  user_profile?: Maybe<Scalars['String']['output']>;
};

export type UserLoginInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type VerifyOtpUserInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};

export type AppProductListQueryVariables = Exact<{
  filter?: InputMaybe<AppProductFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
}>;


export type AppProductListQuery = { __typename?: 'Query', appProductList?: { __typename?: 'AppProductList', data?: Array<{ __typename?: 'AppProduct', id?: number | null, product_name?: string | null, slug?: string | null, product_description?: string | null, price?: string | null, discounted_price?: string | null, discount?: string | null, is_active?: boolean | null, created_at?: string | null, updated_at?: string | null, product_images?: Array<{ __typename?: 'Image', id?: number | null, image_url?: string | null, created_at?: string | null, updated_at?: string | null } | null> | null, categories?: Array<{ __typename?: 'Category', id?: number | null, parent_category_name?: string | null, parent_id?: number | null, category_name?: string | null, category_image?: string | null, slug?: string | null, created_at?: string | null, updated_at?: string | null } | null> | null, created_by?: { __typename?: 'ProductDetailOwner', id?: number | null, fullname?: string | null, user_profile?: string | null, phone_number?: string | null, email?: string | null } | null } | null> | null, pagination?: { __typename?: 'Pagination', total?: number | null, size?: number | null, current?: number | null } | null } | null };

export type AppShopListQueryVariables = Exact<{ [key: string]: never; }>;


export type AppShopListQuery = { __typename?: 'Query', appShopList?: Array<{ __typename?: 'Shop', id?: number | null, business_name?: string | null, business_profile?: string | null, business_address?: string | null, patent?: string | null, business_license?: string | null, province_city?: string | null, business_reg_no?: string | null, phone_number?: string | null } | null> | null };


export const AppProductListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AppProductList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AppProductFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appProductList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product_name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"product_images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image_url"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product_description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discounted_price"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent_category_name"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"category_name"}},{"kind":"Field","name":{"kind":"Name","value":"category_image"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"user_profile"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}}]}}]} as unknown as DocumentNode<AppProductListQuery, AppProductListQueryVariables>;
export const AppShopListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AppShopList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appShopList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"business_name"}},{"kind":"Field","name":{"kind":"Name","value":"business_profile"}},{"kind":"Field","name":{"kind":"Name","value":"business_address"}},{"kind":"Field","name":{"kind":"Name","value":"patent"}},{"kind":"Field","name":{"kind":"Name","value":"business_license"}},{"kind":"Field","name":{"kind":"Name","value":"province_city"}},{"kind":"Field","name":{"kind":"Name","value":"business_reg_no"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}}]}}]} as unknown as DocumentNode<AppShopListQuery, AppShopListQueryVariables>;