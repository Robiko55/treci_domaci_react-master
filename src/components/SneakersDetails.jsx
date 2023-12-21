import React, { useState, useEffect } from 'react';
import '../App';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SNEAKER_DETAILS_URL } from '../Api';

const SneakersDetails = () => {
  const [sneaker, setSneaker] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${SNEAKER_DETAILS_URL}/${id}`)
      .then((res) => {
        setSneaker(res.data);
        console.log('*****************8')
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="sneaker-details" data-testid='details-1'>
      <div>
        <h1>{sneaker?.model}</h1>
       <img src={sneaker.image} alt="Automobil" data-testid='carimg-1'/>
      </div>
      <div>
        <h2>Opis automobila</h2>
        <h3>{sneaker?.model}</h3>
        <h4>Brend: {sneaker?.make_id}</h4>
        <h4>Cena: {sneaker?.price}€</h4>
        <h4>Godina izlaska: {sneaker?.year}</h4>
      </div>
    </div>
  );
};

export default SneakersDetails;