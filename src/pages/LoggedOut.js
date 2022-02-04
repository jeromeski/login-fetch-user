import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import LoginForm from "../components/LoginForm";

function LoggedOut() {
  return (
    <div className="LoggedOut">
      <Tabs>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <LoginForm />
          </TabPanel>
          <TabPanel>
            <h1>SignUpForm</h1>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default LoggedOut;
