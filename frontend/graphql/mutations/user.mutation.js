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

export const LOGIN = gql`
    mutation login($input: LoginInput!) {
        login(input: $input) {
            _id
            username
            name
        }
    }
`;

export const LOGOUT = gql`
	mutation Logout {
		logout {
			message
		}
	}
`;