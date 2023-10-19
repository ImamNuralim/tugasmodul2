import React from "react";
import InstaIcon from "../elements/iconbutton";
import styled from "styled-components";
import "../App.css";

const Card = styled.div`
  width: 18rem;
  background-color: #F8F6F4;
  border: 3px solid;
  box-shadow: light;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family:  'Courier New', Courier, monospace;
`;

const ProfileImage = styled.img`
  width: 50%;
  margin: 1rem;
  border-radius: 50%;
  background-color: #9A9297;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardTitle = styled.h2`
  text-align: center;
  margin: 0.5rem;
  font-size: 18px;
  color: #00ff2a;
  font-family: 'Courier New', Courier, monospace;
`;

const CardText = styled.p`
  margin: 0.5rem;
  font-size: 15px;
  color: #00ff2a;
  font-family: 'Courier New', Courier, monospace;
`;

const InstaLink = styled.a`
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
`;

function Square(props) {
  return (
    <Card className="animationcard">
      <ProfileImage
        src={props.foto}
        alt="profile picture"
        className="animationimg"
      />
      <CardBody>
        <CardTitle>{props.nama}</CardTitle>
        <CardText>{props.nim}</CardText>
        <CardText>{props.email}</CardText>
        <InstaLink href={props.ig} target="_blank">
          <InstaIcon alt="Instagram" src="link ke ikon Instagram" />
        </InstaLink>
      </CardBody>
    </Card>
  );
}

export default Square;
