import styled from "styled-components";
import { Form } from "formik";

export const ProfileContainer = styled.div`
  width: 85%;
  margin: 5rem auto;
  display: flex;
  min-height: 70vh;
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  width: 75%;
  background: #eee;
`;
