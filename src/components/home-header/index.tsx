import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUser, useApp } from "@realm/react";
import { Power } from "phosphor-react-native";

import theme from "../../theme";
import * as S from "./styles";

export function HomeHeader() {
  const insets = useSafeAreaInsets();

  const paddingTop = insets.top + 32;

  const user = useUser();
  const app = useApp();

  function handleLogout() {
    app.currentUser?.logOut();
  }

  return (
    <S.Container style={{ paddingTop }}>
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
