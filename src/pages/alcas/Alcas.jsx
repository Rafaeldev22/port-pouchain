import { useState } from "react";
import Nav from "../../../components/nav/Nav";

import "./Alcas.css";
import Card from "../../../components/card/Card";
import Modal from "../../../components/modal/Modal"

import imagensAlcas from '../../api/imagensAlcas'

export default function Alcas() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="content">
      <Nav openModal={openModal}/>
      <div className="content-card">
        {imagensAlcas.map((item, index) => (
            <Card key={index} imageSrc={item.link1} titulo={item.titulo} descricao={item.descricao} paragrafo={item.info} link={item.link}/>
        ))}
      </div>
      <Modal show={showModal} onClose={closeModal} />

    </div>
  );
}
