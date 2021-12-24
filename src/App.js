import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";
import { DefaultLayout } from "./templates/DefaultLayout";
import { HeaderOnly } from "./templates/HeaderOnly";

const ayaka = {
  name: "Ayaka",
  image: "https://source.unsplash.com/nCk-Pb0Lll8",
  email: "aaa@gmail.com",
  phone: "00000-000-000",
  company: {
    name: "TEST Inc."
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      {/* <HeaderOnly> */}
      <DefaultLayout>
        <PrimaryButton>1</PrimaryButton>
        <PrimaryButton>Test</PrimaryButton>
        <SecondaryButton>Button</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={ayaka} />
        {/* </HeaderOnly> */}
      </DefaultLayout>
    </BrowserRouter>
  );
}
