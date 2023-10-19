import React, { Component } from "react";
import Square from "../elements/square";
import Wrapper from "../elements/Wrapper";

export default class Card extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Square
            nim="21120120140168"
            nama="Ahmad Aldani Herlangga"
            foto="src\assets\367438719_986490159275735_1443502270055041290_n.jpg"
            email="ahmadaldani@gmail.com"
            ig="https://www.instagram.com/aldaniherlangga/"
          />
          <Square
            nim="21120120140151"
            nama="Roy Putra Riona Nadhier"
            foto="src\assets\368946850_533796568892911_4767034110959780440_n.jpg"
            email="royputra@gmail.com"
            ig="https://www.instagram.com/roy.nadhiier"
          />
          <Square
            nim="21120120120014"
            nama="Imam Nuralim"
            foto="src\assets\391254412_1522294488520694_1669695882998439951_n.jpg"
            email="immnuralim@gmail.com"
            ig="https://www.instagram.com/imm.nrlm/"
          />
          <Square
            nim="21120120140147"
            nama="Diefa Edra Rivandi"
            foto="src\assets\WhatsApp Image 2023-10-19 at 15.57.13.jpeg"
            email="diefaedra@gmail.com"
            ig="https://www.instagram.com/diefaedra/"
          />
        </Wrapper>
      </div>
    );
  }
}
