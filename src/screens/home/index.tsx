import { Text } from "react-native";
import * as S from "./styles";
import { HomeHeader } from "../../components/home-header";

export function Home() {
  console.log("teste");
  return (
    <S.Container>
      <HomeHeader />
    </S.Container>
  );
}
