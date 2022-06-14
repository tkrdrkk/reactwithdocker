/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBulletInput = {
  id?: string | null,
  subject: string,
  body: string,
};

export type ModelBulletConditionInput = {
  subject?: ModelStringInput | null,
  body?: ModelStringInput | null,
  and?: Array< ModelBulletConditionInput | null > | null,
  or?: Array< ModelBulletConditionInput | null > | null,
  not?: ModelBulletConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Bullet = {
  __typename: "Bullet",
  id: string,
  subject: string,
  body: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBulletInput = {
  id: string,
  subject?: string | null,
  body?: string | null,
};

export type DeleteBulletInput = {
  id: string,
};

export type ModelBulletFilterInput = {
  id?: ModelIDInput | null,
  subject?: ModelStringInput | null,
  body?: ModelStringInput | null,
  and?: Array< ModelBulletFilterInput | null > | null,
  or?: Array< ModelBulletFilterInput | null > | null,
  not?: ModelBulletFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBulletConnection = {
  __typename: "ModelBulletConnection",
  items:  Array<Bullet | null >,
  nextToken?: string | null,
};

export type CreateBulletMutationVariables = {
  input: CreateBulletInput,
  condition?: ModelBulletConditionInput | null,
};

export type CreateBulletMutation = {
  createBullet?:  {
    __typename: "Bullet",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBulletMutationVariables = {
  input: UpdateBulletInput,
  condition?: ModelBulletConditionInput | null,
};

export type UpdateBulletMutation = {
  updateBullet?:  {
    __typename: "Bullet",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBulletMutationVariables = {
  input: DeleteBulletInput,
  condition?: ModelBulletConditionInput | null,
};

export type DeleteBulletMutation = {
  deleteBullet?:  {
    __typename: "Bullet",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBulletQueryVariables = {
  id: string,
};

export type GetBulletQuery = {
  getBullet?:  {
    __typename: "Bullet",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBulletsQueryVariables = {
  filter?: ModelBulletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBulletsQuery = {
  listBullets?:  {
    __typename: "ModelBulletConnection",
    items:  Array< {
      __typename: "Bullet",
      id: string,
      subject: string,
      body: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBulletSubscription = {
  onCreateBullet?:  {
    __typename: "Bullet",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBulletSubscription = {
  onUpdateBullet?:  {
    __typename: "Bullet",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBulletSubscription = {
  onDeleteBullet?:  {
    __typename: "Bullet",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
