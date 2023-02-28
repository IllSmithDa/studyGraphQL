import { ApolloQueryResult, gql, OperationVariables, useMutation } from "@apollo/client";

const DELETE_NEW_USER = gql`
  mutation DeleteUser($data: ID!) {
    deleteUser(input: $data) {
      id
    }
  }
`

// pass in the function and look up type by hovering over refetchUsers
export default function RemoveUser(obj: {
  userId: number,
  refetchUsers: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<any>>
}) {
  const [removeUser, {error: userError} ] = useMutation(DELETE_NEW_USER);
  const {refetchUsers, userId } = obj;

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <button onClick={() => {
          removeUser({ variables: { id: userId }})
          // call the function
          refetchUsers();
        }}>
          Delete User
        </button>
      </div>
      <div>
        {
          userError && <div>
            <p>{userError.message}</p>
          </div>
        }
      </div>
    </div>
  )


}

