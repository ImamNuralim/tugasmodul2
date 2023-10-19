import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 3px;
`;

const TextMuted = styled.p`
  color: #888;
  margin: 0;
  color: #00ff2a;
  font-family:'Courier New';
`;

function Footer() {
  return (
    <FooterContainer>
      <TextMuted>Created by Kelompok 11. © 2023</TextMuted>
    </FooterContainer>
  );
}
export default Footer;
