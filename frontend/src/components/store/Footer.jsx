import styled from "styled-components";
import {ImPhone} from 'react-icons/im';
import {GrMail} from 'react-icons/gr';
import {MdLocationOn} from 'react-icons/md';
import social from '../../assets/social.png';
import { useNavigate } from "react-router-dom";
  
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E9E3FF;
    padding: 10px 30px;
    font-family: "Poppins", sans-serif;
`;

const Top = styled.div`
  display: flex;
`;
  
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px 50px 10px 20px;
`;
  
const Logo = styled.h1`
  color: #9980fa;
  display: flex;
  justify-content: left;
`;
  
const Desc = styled.p`
    margin: 20px 0px;
    color: #434242;
`;
  
const Center = styled.div`
    flex: 0.8;
    padding: 20px;
`;
  
const Title = styled.h3`
    margin-bottom: 30px;
    color: #2C2C54;
`;
  
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
  
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    color: #434242;
    cursor: pointer;

    &:hover {
      color: #9980fa;
    }
`;
  
const Right = styled.div`
    flex: 1.2;
    padding: 20px;
`;
  
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: #434242;
`;

const ContactIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`
  
const Social = styled.img`
      width: 20%;
`;

const Bottom = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: gray;
      border-top: 1px solid gray;
      padding-top: 10px;
`
  
const Footer = () => {

    const navigate = useNavigate()

    return (
      <Container>
        <Top>
          <Left>
            <Logo><span style={{color: '#2c2c54'}}>Central</span>PetCare</Logo>
            <Desc>
            Central Pet Care, one of the leading veterinary clinics in Sri Lanka, takes pride in providing exceptional care for your pets. Our team of highly experienced veterinarians is dedicated to ensuring the well-being and health of your beloved animals.
            </Desc>

          </Left>
          <Center>
            <Title>Useful Links</Title>
            <List>
              <ListItem onClick={() => {navigate('../'); window.scroll(0,0)}}>Home</ListItem>
              <ListItem onClick={() => {navigate('../cart'); window.scroll(0,0)}}>Cart</ListItem>
              <ListItem onClick={() => {navigate('../services'); window.scroll(0,0)}}>Services</ListItem>
              <ListItem onClick={() => {navigate('../wishlist'); window.scroll(0,0)}}>Wishlist</ListItem>
              <ListItem onClick={() => {navigate('../store'); window.scroll(0,0)}}>Store</ListItem>
              <ListItem onClick={() => {navigate('../account/myorders'); window.scroll(0,0)}}>My Orders</ListItem>
            </List>
          </Center>
          <Right>
            <Title>Contact</Title>
            <ContactItem>     
              <ContactIcon>
                <MdLocationOn />
              </ContactIcon>
              No. 94c, Attidiya road, Bellanthota, Dehiwala-Mount Lavinia
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <ImPhone />
              </ContactIcon>
              +94 77 346 0430
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <GrMail/>
              </ContactIcon>
              centralpetcare@gmail.com
            </ContactItem>
            <Social src={social} />
          </Right>
        </Top>

        <Bottom>Copyright 2023 © CentralPetCare. All Rights Reserved.</Bottom>
      </Container>
    );
};
  
export default Footer;