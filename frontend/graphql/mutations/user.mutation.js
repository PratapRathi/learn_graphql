import {gql} from '@apollo/client';

export const SIGN_UP = gql`
    mutation signUp($input: SignUpInput!) {
        signUp(input: $input) {
            _id
            username
            name
        }
    }
`;