import {mergeTypeDefs} from "@graphql-tools/merge";
import userTypeDef from "./user.typeDef.js";
import transactionTypeDef from "./transaction.typeDef.js";

const mergeTypeDef = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergeTypeDef;