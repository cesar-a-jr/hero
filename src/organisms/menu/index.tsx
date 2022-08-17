import * as S from "./style"

const Menu = () => {
    return <S.MenuList>
        <S.ItemList>
            <a href="#">Home</a> 
        </S.ItemList>
        <S.ItemList>
            <a href="https://www.instagram.com/dicas_do_front/">Dicas do Front</a> 
        </S.ItemList>
        <S.ItemList>
            <a href="https://api.whatsapp.com/send?phone=5541998981739&text=Ol%C3%A1%2C%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20prestados!">Serviços</a> 
        </S.ItemList>
        <S.ItemList>
            <a href="https://api.whatsapp.com/send?phone=5541998981739">Contato</a> 
        </S.ItemList>
    </S.MenuList>;
}

export default Menu;