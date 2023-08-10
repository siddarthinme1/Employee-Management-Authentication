import {
  MsalProvider,
  AuthenticatedTemplate,
  useMsal,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { PageLayout } from "../Components/PageLayout";
import { loginRequest } from "../authConfig";

import "../styles/App.css";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import Employees from "../Pages/Employees/Employees";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "10px",
  },
});

/**
 * Most applications will need to conditionally render certain components based on whether a user is signed in or not.
 * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will
 * only render their children if a user is authenticated or unauthenticated, respectively. For more, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
const MainContent = () => {
  /**
   * useMsal is hook that returns the PublicClientApplication instance,
   * that tells you what msal is currently doing. For more, visit:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
   */
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleRedirect = () => {
    instance
      .loginRedirect({
        ...loginRequest,
        prompt: "create",
      })
      .catch((error) => console.log(error));
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AuthenticatedTemplate>
          {activeAccount ? <Employees /> : null}
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <Button
            className="signInButton"
            onClick={handleRedirect}
            variant="contained"
          >
            Sign up
          </Button>
        </UnauthenticatedTemplate>
      </div>
    </ThemeProvider>
  );
};

/**
 * msal-react is built on the React context API and all parts of your app that require authentication must be
 * wrapped in the MsalProvider component. You will first need to initialize an instance of PublicClientApplication
 * then pass this to MsalProvider as a prop. All components underneath MsalProvider will have access to the
 * PublicClientApplication instance via context as well as all hooks and components provided by msal-react. For more, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
const App = ({ instance }) => {
  return (
    <MsalProvider instance={instance}>
      <PageLayout>
        <MainContent />
      </PageLayout>
    </MsalProvider>
  );
};

export default App;
