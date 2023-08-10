import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import {
  AppBar,
  Button,
  Grid,
  InputBase,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles(() => ({
  root: {
    transform: "translateZ(0)",
  },
  searchInput: {
    backgroundColor: "white",
    opacity: "0.8",
    padding: "0px 8px",
    //reference selector of the parent rule
    "&:hover": {
      backgroundColor: "#F2F2F2",
    },
  },
}));

export const NavigationBar = () => {
  const { instance } = useMsal();
  const classes = useStyles();

  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  const handleLogoutRedirect = () => {
    instance.logoutRedirect().catch((error) => console.log(error));
  };

  /**
   * Most applications will need to conditionally render certain components based on whether a user is signed in or not.
   * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will
   * only render their children if a user is authenticated or unauthenticated, respectively.
   */
  return (
    <>
      <AppBar color="primary" variant="contained" position="static">
        <Toolbar>
          <Grid container alignItems="center" columns={{ xs: 4, md: 12 }}>
            <Grid item>
              <Link href="/">
                <Typography variant="h5" component="h2" sx={{ color: "white" }}>
                  S&K Technology Services
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <InputBase
                data-testid="searchInput"
                startAdornment={<SearchIcon fontSize="small" />}
                placeholder="Search"
                className={classes.searchInput}
                sx={{ ml: "15px", borderRadius: "8px" }}
              ></InputBase>
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <AuthenticatedTemplate>
                <Button
                  variant="contained"
                  onClick={handleLogoutRedirect}
                  color="error"
                >
                  Sign out
                </Button>
              </AuthenticatedTemplate>
              <UnauthenticatedTemplate>
                <Button
                  variant="contained"
                  onClick={handleLoginRedirect}
                  color="success"
                >
                  Sign in
                </Button>
              </UnauthenticatedTemplate>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
