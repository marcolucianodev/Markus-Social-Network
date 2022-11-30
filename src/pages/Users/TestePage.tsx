import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api_url from "../../config/config";

const TestePage = () => {

    const { id } = useParams();

    const [userList, setUserList] = useState([])

    const getUsers = async () => {
        const response = await api_url.get(`/users/${id}`)
        const data = response.data

        const { name, nickname } = response.data

        const userList = {
            id,
            name,
            nickname
        }

        console.log(userList)
    }

    useEffect(() => {
        getUsers();
    }, [id])

    return (
        <div>
            <h1>{}</h1>
            <h2>{}</h2>
        </div>
    )
}

export default TestePage;