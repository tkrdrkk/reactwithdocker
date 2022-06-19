import { API, graphqlOperation } from "aws-amplify";
import { createBullet as amplifyCreateBullet } from "api/graphql/mutations";
import { CreateBulletInput } from "api/graphql/API";
export const createBullet = async (input: CreateBulletInput) => {
  try {
    const gqlResponse = await API.graphql(
      graphqlOperation(amplifyCreateBullet, { input: { ...input } })
    );
  } catch (e) {
    console.table(e);
  }
};
