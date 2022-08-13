import Header from "../../organisms/header";
import * as S from "./stylees"

type FrontEndProps = {
    children: React.ReactNode;
};


const FrontEnd = ({children}: FrontEndProps) => {
    return <S.Container><Header></Header></S.Container>;
};

export default FrontEnd;