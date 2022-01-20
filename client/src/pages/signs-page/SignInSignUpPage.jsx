import SignIn from "../../components/signs-sign-in/sign-in.component";
import SignUp from "../../components/signs-sign-up/signup.component";

import "./contactPage.styles.scss";

const ContactPage = () => (
  <div className="contact-page">
    <SignIn />
    <SignUp />
  </div>
);

export default ContactPage;
