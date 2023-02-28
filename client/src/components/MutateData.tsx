import { useState } from "react"
import { ApolloQueryResult, gql, OperationVariables, useMutation } from "@apollo/client";

const CREATE_NEW_USER = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(input: $data) {
      name
      username
      id
    }
  }
`

// pass in the function and look up type by hovering over refetchUsers
export default function MutateData(obj: {
  refetchUsers: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<any>>
}) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");
  const [newUser, {error: userError} ] = useMutation(CREATE_NEW_USER);
  const {refetchUsers } = obj;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mutate Data</h1>
      <div>
        <input type="text" placeholder="name" onChange={(e) => { setName(e.target.value) }}/>
        <input type="text" placeholder="username" onChange={(e) => { setUsername(e.target.value)}}/>
        <input type="number" placeholder="age" onChange={(e) => { setAge( Number(e.target.value) )}}/>
        <input 
          type="text" 
          placeholder="nationality" 
          onChange={(e) => { setNationality(e.target.value.toLocaleUpperCase()) }}
        />
        <button onClick={() => {
          newUser({ variables: { data: { name, username, age, nationality }}})
          // call the function
          refetchUsers();
        }}>
          Create
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

