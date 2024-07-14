import { StatusBar } from "react-native";
import { AppProvider, UserProvider } from "@realm/react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { REALM_APP_ID } from "@env";
import { SignIn } from "@/screens/sign-in";
import theme from "@/theme";
import { Loading } from "@/components/loading";
import { AppRoutes } from "@/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <AppProvider id={REALM_APP_ID}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <UserProvider fallback={<SignIn />}>
          <AppRoutes />
        </UserProvider>
      </ThemeProvider>
    </AppProvider>
  );
}
