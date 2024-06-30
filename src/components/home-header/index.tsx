import { TouchableOpacity } from "react-native";
import { Power } from "phosphor-react-native";

import * as S from "./styles";

export function HomeHeader() {
  return (
    <S.Container>
      <S.Greeting>
        <S.Message>Olá</S.Message>
        <S.Name>Guilherme</S.Name>
      </S.Greeting>

      <TouchableOpacity>
        <Power />
      </TouchableOpacity>
    </S.Container>
  );
}
