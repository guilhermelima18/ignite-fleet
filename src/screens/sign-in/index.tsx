import { useState } from "react";
import { Alert } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Credentials } from "realm";
import { useApp } from "@realm/react";
import { WEB_CLIENT_ID, IOS_CLIENT_ID } from "@env";
import backgroundImage from "../../assets/background.png";
import { Button } from "../../components/button";
import * as S from "./styles";

GoogleSignin.configure({
  scopes: ["email", "profile"],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
});

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const app = useApp();

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true);

      const { idToken } = await GoogleSignin.signIn();

      if (idToken) {
        const credentials = Credentials.jwt(idToken);
        await app.logIn(credentials);
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Atenção!",
        "Não foi possível fazer a autenticação com o Google."
      );
    } finally {
      setIsAuthenticating(false);
    }
  }

  return (
    <S.Container source={backgroundImage}>
      <S.Title>Ignite Fleet</S.Title>
      <S.Slogan>Gestão de uso de veículos</S.Slogan>

      <Button
        title="Entrar com Google"
        isLoading={isAuthenticating}
        onPress={handleGoogleSignIn}
      />
    </S.Container>
  );
}
