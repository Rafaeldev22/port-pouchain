import "./Modal.css";
import { Link } from "react-router-dom";

const modalVendas = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="capsula">
      <div className="princ-1">
        <Link to="https://bit.ly/Rafa-zap" className="link">
          <div className="quadro">
            <img
              src="https://i.ibb.co/bJWCBD9/Foto-de-Bless-7.jpg"
              className="img-vend"
            />
            <h2>Rafaela Nogueira</h2>
          </div>
        </Link>
        <Link to="https://bit.ly/Victoria-zap" className="link">
          <div className="quadro">
            <img
              src="https://i.ibb.co/MgqXNyT/Foto-de-Bless-8.jpg"
              className="img-vend"
            />
            <h2>Victoria Lima</h2>
          </div>
        </Link>
        <Link to="https://bit.ly/Natali-zap" className="link">
          <div className="quadro">
            <img
              src="https://i.ibb.co/DWyW4SF/Foto-de-Bless-10.jpg"
              className="img-vend"
            />
            <h2>Natali Dantas</h2>
          </div>
        </Link>
        <Link to="https://bit.ly/Beth-zap" className="link">
          <div className="quadro">
            <img
              src="https://i.ibb.co/VD5R4mC/Foto-de-Bless-9.jpg"
              className="img-vend"
            />
            <h2>Elizabeth Albuquerque</h2>
          </div>
        </Link>
        <p onClick={onClose} className="fechar">
          X
        </p>
      </div>
    </div>
  );
};

export default modalVendas;
