import { AuthenticatedTemplate } from "@azure/msal-react";
import { NavigationBar } from "./NavigationBar";
import { Link } from "@mui/material";
import PageHeader from "./PageHeader";
import PeopleIcon from "@mui/icons-material/People";

export const PageLayout = (props) => {
  return (
    <>
      <NavigationBar />
      <AuthenticatedTemplate>
        <PageHeader
          title="Employee"
          subTitle="Welcome to the Employee Management System"
          icon={<PeopleIcon fontSize="large" />}
        />
      </AuthenticatedTemplate>
      {props.children}
      <AuthenticatedTemplate>
        <footer>
          <center>
            How did we do?
            <Link
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR73pcsbpbxNJuZCMKN0lURpUMlRHSkc5U1NLUkxFNEtVN0dEOTFNQkdTWiQlQCN0PWcu"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Share your experience!
            </Link>
          </center>
        </footer>
      </AuthenticatedTemplate>
    </>
  );
};
