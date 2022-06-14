/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBullet = /* GraphQL */ `
  mutation CreateBullet(
    $input: CreateBulletInput!
    $condition: ModelBulletConditionInput
  ) {
    createBullet(input: $input, condition: $condition) {
      id
      subject
      body
      createdAt
      updatedAt
    }
  }
`;
export const updateBullet = /* GraphQL */ `
  mutation UpdateBullet(
    $input: UpdateBulletInput!
    $condition: ModelBulletConditionInput
  ) {
    updateBullet(input: $input, condition: $condition) {
      id
      subject
      body
      createdAt
      updatedAt
    }
  }
`;
export const deleteBullet = /* GraphQL */ `
  mutation DeleteBullet(
    $input: DeleteBulletInput!
    $condition: ModelBulletConditionInput
  ) {
    deleteBullet(input: $input, condition: $condition) {
      id
      subject
      body
      createdAt
      updatedAt
    }
  }
`;
