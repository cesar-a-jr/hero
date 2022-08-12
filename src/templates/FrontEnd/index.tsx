import * as S from "./stylees"

type FrontEndProps = {
    children: React.ReactNode;
};


const FrontEnd = ({children}: FrontEndProps) => {
    return <S.Container>Teste FrontEnd{children}</S.Container>;
};

export default FrontEnd;