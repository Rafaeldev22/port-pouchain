import Nav from "../../../components/nav/Nav";
import "../../../components/card/Card";

import imagensPapeis from '../../api/imagensPapeis'

import "./Papeis.css";
import Card from "../../../components/card/Card";

export default function Papeis() {
  return (
    <div className="content">
      <Nav />
      <div className="content-card">
        {imagensPapeis.map((item, index) => (
            <Card key={index} imageSrc={item.link1} titulo={item.titulo} descricao={item.descricao} paragrafo={item.info} link={item.link}/>
        ))}
      </div>
    </div>
  );
}
