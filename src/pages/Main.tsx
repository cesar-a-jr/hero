import ButtonContact from '../atoms/buttons/contact';
import FrontEnd from '../templates/FrontEnd'
import * as S from './style'
import HeroHeaderImage from '../assets/Rectangle-3.png'
import CardActivity from '../molecules/CardActivity'

function Main() {

  return (
    <FrontEnd> 
      <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <p>We are a full service digital agency that builds immesive user experience.</p>
          <ButtonContact></ButtonContact>
        </div>

        <S.CollumnImage>
          
          <CardActivity />

          <img src={HeroHeaderImage} alt="Uma mulher realizando uma pesquisa" />
          
        </S.CollumnImage>

      </S.Container>
    </FrontEnd>);
}

export default Main
