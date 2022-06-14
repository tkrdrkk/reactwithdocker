import { API, graphqlOperation } from "aws-amplify";
import { listBullets as amplifyListBullets } from "api/graphql/queries";
import { GraphQLResult } from "aws-amplify/node_modules/@aws-amplify/api-graphql";
import { Bullet, ListBulletsQuery } from "api/graphql/API";

export const listBullets = async (): Promise<Bullet[]> => {
  try {
    const gqlResponse = (await API.graphql(
      graphqlOperation(amplifyListBullets)
    )) as GraphQLResult<ListBulletsQuery>;
    return (
      gqlResponse.data?.listBullets?.items.filter(
        (item): item is NonNullable<typeof item> => item != null // nullを配列から除去した上で型情報からも消す
      ) || []
    );
  } catch (e) {
    console.log(e);
    return [];
  }
};
