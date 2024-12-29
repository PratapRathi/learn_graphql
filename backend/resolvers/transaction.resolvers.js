import Transaction from "../models/transaction.modal.js";

const transactionResolvers = {
    Query: {
        transactions: async(_,__,context) => {
            try {
                if(!context.getUser()) throw new Error("Unauthorized");
                const userId = await context.getUser()._id;
                const transactions = await Transaction.find({userId});
                return transactions;
            } catch (err) {
                console.error("Error in transactions: " + err);
                throw new Error(err.message || "Something went wrong");
            }
        },
        transaction: async(_, {transactionId}, context) => {
            try {
                const transaction = await Transaction.findById(transactionId);
                return transaction;
            } catch (err) {
                console.error("Error in transaction: " + err);
                throw new Error(err.message || "Something went wrong");
            }
        }

        // TODO => ADD CATEGORY STATISTICS QUERY
    },
    Mutation: {
        createTransaction: async(_, {input}, context) => {
            try {
                const newTransaction = Transaction.create({
                    ...input,
                    userId: await context.getUser()._id
                });
                await newTransaction.save();
                return newTransaction;
            } catch (err) {
                console.error("Error in createTransaction: " + err);
                throw new Error(err.message || "Something went wrong");
            }
        },
        updateTransaction: async(_, {input}) => {
            try {
                const updateTransaction = await Transaction.findByIdAndUpdate(input.transactionId, input);
                return updateTransaction;
            } catch (err) {
                console.error("Error in updateTransaction: " + err);
                throw new Error(err.message || "Something went wrong");
            }
        },
        deleteTransaction: async(_, {transactionId}, context) => {
            try {
                const deleteTransaction = await Transaction.findByIdAndDelete(transactionId);
                return deleteTransaction;
            } catch (err) {
                console.error("Error in deleteTransaction: " + err);
                throw new Error(err.message || "Something went wrong");
            }
        }
    }

    // TODO => ADD TRANSACTION-USER RELATIONSHIP
}

export default transactionResolvers;