//import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import calories from '../../assets/calories-icon.svg'
import protein from '../../assets/protein-icon.svg'
import carbs from '../../assets/carbs-icon.svg'
import fat from '../../assets/fat-icon.svg'
import './rightbar.css'

const NavPictos = styled.img`
  height: 64px;
  width: 64px;
  color: #FF6060;
  @media (max-width: 767px) {
    height: 45px;
    width: 140px;
}
`

const PictoContainer = styled.nav`
width: 100px
  padding: 20px;
  color: #fff;
`

function Rightbar() {
  return (
    <PictoContainer>
      <div className="keydata" to="#"> <NavPictos src={calories} alt="calories"/>
        <div className="datatext"><h3>1,930kCarl</h3><p>Calories</p></div>
      </div>
      <div className="keydata" to="#"> <NavPictos src={protein} /></div>
      <div className="keydata" to="#"> <NavPictos src={carbs} /></div>
      <div className="keydata" to="#"> <NavPictos src={fat} /></div>
      <div className="copi" >Copiryght, SportSee 2020</div>
    </PictoContainer>
  )
}

export default Rightbar
