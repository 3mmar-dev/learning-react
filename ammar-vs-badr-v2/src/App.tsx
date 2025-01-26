import { registerInputs } from "./components/Register/registerInputs";
import RegisterLayout from "./components/Register/RegisterLayout";
import Form from "./components/ui/Form";

const App = () => {
  return (
    <main>
      <RegisterLayout>
        <Form inputs={registerInputs} />
      </RegisterLayout>
    </main>
  );
};

export default App;
