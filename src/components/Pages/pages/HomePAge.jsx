import React from 'react'
import Header from '../../Chaire/Header'
import { connect } from 'react-redux'
import { signOutAPI } from '../../../redux/actions'
import Leftside from '../../Chaire/Leftside'
import Main from '../../Chaire/Main'
import Rightside from '../../Chaire/Rightside'
import styled from "styled-components";
function HomePAge(props) {
  const {user,signOut } = props
  return (
    <div>
      <Header user={user} signOut={signOut}/>
      <Container>
      <Section>
        <h5>
          <a href="#">Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <Leftside user={user}  />
        <Main />
        <Rightside />
      </Layout>
    </Container>
    </div>
  )
}
const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;
const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 5px;
  }
`;
const Layout = styled.div`
  display: grid;
  padding: 15px;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return{
    signOut : () => dispatch(signOutAPI())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePAge)