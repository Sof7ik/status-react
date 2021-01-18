import './App.css';
import Block from "./components/block";
import InputText from "./components/InputText";

function App() {
  return (
      <div className="container">
          <Block line={true}>
              <InputText
                  label="Пароль"
                  inputName="password"
                  message="Ваш новый пароль должен содержать не менее 5 символов."
              />
              <InputText
                  label="Пароль ещё раз"
                  inputName="password_repeat"
                  message="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."
              />
          </Block>
      </div>


  );
}

export default App;
