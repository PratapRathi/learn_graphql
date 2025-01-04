import { gql } from "@apollo/client";

export const CREATE_TRANSACTION = gql`
  mutation createTransaction($input: CreateTransactionInput!) {
    createTransaction(input: $input) {
      _id
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`;

export const UPDATE_TRANSACTION = gql`
  mutation updateTransaction($input: UpdateTransactionInput!) {
    updateTransaction(input: $input) {
      _id
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`;

export const DELETE_TRANSACTION = gql`
  mutation deleteTransaction($input: ID!) {
    deleteTransaction(transactionId: $input) {
      _id
    }
  }
`;