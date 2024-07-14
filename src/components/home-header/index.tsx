import { TouchableOpacity } from "react-native";
import { Power } from "phosphor-react-native";
import { useUser, useApp } from "@realm/react";

import theme from "../../theme";
import * as S from "./styles";

export function HomeHeader() {
  const user = useUser();
  const app = useApp();

  function handleLogout() {
    app.currentUser?.logOut();
  }

  return (
    <S.Container>
      <S.Picture
        source={{ uri: user?.profile?.pictureurl }}
        placeholder="LBF$CW?v.Trq*0M_.8_3xvIVs:~q"
      />
      <S.Greeting>
        <S.Message>Olá</S.Message>
        <S.Name>{user?.profile?.name}</S.Name>
      </S.Greeting>

      <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </S.Container>
  );
}
