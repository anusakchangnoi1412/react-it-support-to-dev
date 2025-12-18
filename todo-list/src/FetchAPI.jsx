import { useEffect, useState } from "react";

function FetchAPI() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "https://jsonplaceholder.typicode.com/users/1/3"


    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("Fetach Error")
                }
                const data = await response.json()
                setUser(data)

            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [])

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p style={{ color: "red" }}>Error: {error}</p>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default FetchAPI;
