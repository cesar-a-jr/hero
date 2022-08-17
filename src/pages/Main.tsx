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
          <h1>Aumente sua presença na internet e potencialize seu negócio!</h1>
          <p>Temos uma equipe completa pronta para te auxiliar no crescimento de seu empreendimento!</p>
          <ButtonContact></ButtonContact>
        </div>

        <S.CollumnImage>
          
          <img src={HeroHeaderImage} alt="Uma mulher realizando uma pesquisa" />
          
        </S.CollumnImage>

      </S.Container>
    </FrontEnd>);
}

export default Main
