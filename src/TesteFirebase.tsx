import React, { useState, useEffect} from "react";
// import { initializeApp } from "firebase/app";
// import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import axios from "axios";
import api_url from "./config/config";
import { UserData } from "./pages/Users/styles";

// const firebaseConfig = {
//     apiKey: "AIzaSyAjdbQPNKKUim6Ws4GUiwfXqRseTxnXzfo",
//     authDomain: "markus-sn.firebaseapp.com",
//     databaseURL: "https://markus-sn-default-rtdb.firebaseio.com",
//     projectId: "markus-sn",
//     storageBucket: "markus-sn.appspot.com",
//     messagingSenderId: "670020102786",
//     appId: "1:670020102786:web:cfa35cb2b4aaab5e36629b"
//   };
  

const TesteFirebase = () => {

    const [user, setUser] = useState<any>([]);

    const {id} = useParams();

    const getUsers = async () => {
        const response = await axios.get('fake_API/db.json');

        const data = response.data.users

        // const userData = {
        //     id,
        //     name: data.map((item: any) => item.name)
        // }

        // console.log(userData.name)
        setUser(data)
    }

    const userData = []
    for(let i in user) {
        userData.push(
            <div className="container" style={{
                display:"flex",
                flexDirection:"column"
            }}>
                <div className="user-box">
                    <h2>{user[i].name}</h2>
                    <h3>{user[i].nickname}</h3>
                </div>
            </div>
        )
    }

    useEffect(() => {
        getUsers();
    }, [id])

    return (
        <>
            <h1>Hello World</h1>
            <hr />
            <h2>Usuários:</h2>
            {userData}
        </>

    )
}

export default TesteFirebase;