//import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LeLogo from '../../assets/logo.svg'
import './header.css'

const HomeLogo = styled.img`
  height: 68px;
  width: 210px;
  color: #FF6060;
  @media (max-width: 767px) {
    height: 45px;
    width: 140px;
}
`

const NavContainer = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #020203;
  color: #fff;
`

function Header() {
  return (
    <NavContainer>
      <div to="/">
        <HomeLogo src={LeLogo} />
      </div>
      <div  className="lemenu">
        <div to="#" className="normal" activeClassName="active" exact>Accueil</div>
        <div to="#" className="normal" activeClassName="active" exact>Profil </div>
        <div to="#" className="normal" activeClassName="active" exact>Réglage </div>
        <div to="#" className="normal" activeClassName="active" exact>Communauté </div>
      </div>
    </NavContainer>
  )
}

export default Header
