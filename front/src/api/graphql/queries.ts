/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBullet = /* GraphQL */ `
  query GetBullet($id: ID!) {
    getBullet(id: $id) {
      id
      subject
      body
      createdAt
      updatedAt
    }
  }
`;
export const listBullets = /* GraphQL */ `
  query ListBullets(
    $filter: ModelBulletFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBullets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subject
        body
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
