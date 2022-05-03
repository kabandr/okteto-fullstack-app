import { useEffect, useState } from "react"

function Users() {
    const API_URL = "http://localhost:5000/users"

    const [users, setUsers] = useState([])

    useEffect(() => {

        const fetchUsers = async () => {

            try {
                const response = await fetch(API_URL)
                const usersList = await response.json()
                setUsers(usersList)

            } catch (err: any) {
                console.error(err.message)
            }
        }
        (async () => await fetchUsers())()
    }, [])

    return (
        <>
            <h1>List of Users</h1>
            <p>{JSON.stringify(users)}</p>
        </>
    )

}

export default Users