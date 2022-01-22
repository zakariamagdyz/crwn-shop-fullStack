import SignIn from "../../components/signs-sign-in/sign-in.component";
import SignUp from "../../components/signs-sign-up/signup.component";

import { SignsContainer } from "./signs.styles";
const ContactPage = () => (
  <SignsContainer>
    <SignIn />
    <SignUp />
  </SignsContainer>
);

export default ContactPage;
