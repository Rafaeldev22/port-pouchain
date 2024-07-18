import Nav from "../../../components/nav/Nav";

import "./Acabamento.css";
import Card from "../../../components/card/Card";

import imagensAcabamento from '../../api/imagensAcabamento'

export default function Acabamento() {
  return (
    <div className="content">
      <Nav />
      <div className="content-card">
        {imagensAcabamento.map((item, index) => (
            <Card key={index} imageSrc={item.link1} titulo={item.titulo} descricao={item.descricao} paragrafo={item.info} link={item.link}/>
        ))}
      </div>
    </div>
  );
}
