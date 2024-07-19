import { useState } from "react";
import Nav from "../../../components/nav/Nav";

import imagensPapeis from '../../api/imagensPapeis'

import "./Papeis.css";
import Card from "../../../components/card/Card";
import Modal from "../../../components/modal/Modal"

export default function Papeis() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="content">
      <Nav openModal={openModal} />
      <div className="content-card">
        {imagensPapeis.map((item, index) => (
            <Card key={index} imageSrc={item.link1} titulo={item.titulo} descricao={item.descricao} paragrafo={item.info} link={item.link}/>
        ))}
      </div>

      <Modal show={showModal} onClose={closeModal} />


    </div>
  );
}
