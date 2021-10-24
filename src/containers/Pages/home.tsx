import { FunctionComponent } from "react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import Input from "../../components/Input/Input";

const Home: FunctionComponent = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        perferendis ab sed dolor vitae. Neque enim dicta ea animi iste corrupti
        et earum adipisci. Labore corrupti dicta excepturi laudantium
        perferendis.
      </p>
      <PrimaryButton>Hello</PrimaryButton>
      <SecondaryButton>Hello</SecondaryButton>
      <OutlinedButton>Hello</OutlinedButton>
      <Input type="password" label="Password" color="primary"></Input>
      <Input type="email" label="Email" color="primary"></Input>
    </div>
  );
};

export default Home;
