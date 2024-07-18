import Nav from "../../../components/nav/Nav";

import "./Alcas.css";
import Card from "../../../components/card/Card";

import imagensAlcas from '../../api/imagensAlcas'

export default function Alcas() {
  return (
    <div className="content">
      <Nav />
      <div className="content-card">
        {imagensAlcas.map((item, index) => (
            <Card key={index} imageSrc={item.link1} titulo={item.titulo} descricao={item.descricao} paragrafo={item.info} link={item.link}/>
        ))}
      </div>
    </div>
  );
}
