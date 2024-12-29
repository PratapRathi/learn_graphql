import { users } from "../dummyData/data.js";

const userResolvers = {
  Query: {
    users: () => users,
    user: (_, args) => users.find((user) => user._id === args.userId),
  },
  Mutation: {},
};

export default userResolvers;
