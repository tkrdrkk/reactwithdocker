import { API, graphqlOperation } from "aws-amplify";
import { deleteBullet as amplifyDeleteBullet } from "api/graphql/mutations";
import { DeleteBulletInput } from "api/graphql/API";
export const deleteBullet = async (input: DeleteBulletInput) => {
  try {
    const gqlResponse = await API.graphql(
      graphqlOperation(amplifyDeleteBullet, { input: { ...input } })
    );
  } catch (e) {
    console.log(e);
  }
};
