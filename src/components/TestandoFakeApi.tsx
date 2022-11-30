import React, { useEffect, useState } from "react";
import axios from "axios";
import api_url from "../config/config";
import { Link } from "react-router-dom";

type TestePropsUsers = {
    id: number,
    name: string,
    image_profile: string,
    nickname: string
}

const TestandoFakeApi = () => {
    
    const [user, setUser] = useState([])

    const [group, setGroup] = useState([])

    const getUsers = async () => {
        try {
            const response = await api_url.get('/users')

            const data = response.data

            setUser(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])
    
    return (
        <>
            <div style={{
                display: "flex",
                flexFlow: "wrap",
                gap: "10px",
                backgroundColor: "gray",
                width: "100%",
            }}>
                {user.map((item: TestePropsUsers) => (
                    <div key={item.id}>
                        <img src={item.image_profile} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.nickname}</p>
                        <Link to={`/users/${item.id}`}>Ver detalhes</Link>
                        <h1>{item.id}</h1>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TestandoFakeApi;