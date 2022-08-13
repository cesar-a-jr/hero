import * as S from "./style"
import Logo from '../../molecules/logo'
import Menu from '../menu'
import Button from '../../atoms/buttons'

const Header = () => {
    return (
    <S.Box>
        <Logo />
        <Menu />
        <Button />
    </S.Box>
    )
}

export default Header