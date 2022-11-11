import axios from "axios";
import React, { useState, useEffect } from "react";

const Teste = () => {

  const url = 'fake_API/data.json';

  const [dados, setDados] = useState([]);

  useEffect(() => {

    const getDados = async () => {
      const response = await axios.get(url);
      setDados(response.data.group)
    }
    getDados();

  }, [])

  return (
    <div style={{marginTop: "200px"}}>
      <h1>Retorno do Json Fake</h1>
      {dados.map((dados) => {
        return (
          <ul key={dados.id}>
            <li>{dados.name}</li>
            <li>{dados.group_type}</li>
            <img src={dados.image_cover} alt="" style={{width: "300px"}}/>
            <img src={dados.image_group} alt="" style={{width: "100px"}} />
            <hr></hr>
          </ul>
        )
      })}
    </div>
  )
}

export default Teste;