import './App.css';
import Block from "./components/block";
import InputText from "./components/InputText";
import UpBlock from "./components/UpBlock";

import styles from './App.module.css'
import {Component} from "react";

// const cities = require('./data/cities.json');

function App() {

      return (
          <div className="container">
              <Block line={true}>
                <UpBlock>
                    <InputText
                        label="Ваш город"
                        inputName="city"
                        CSSсlasses={`${styles.inputPassword} top-input`}
                    />
                </UpBlock>
              </Block>

              <Block line={true}>
                  <InputText
                      label="Пароль"
                      inputName="password"
                      message="Ваш новый пароль должен содержать не менее 5 символов."
                      CSSсlasses={`${styles.inputPassword} top-input`}
                  />
                  <InputText
                      label="Пароль ещё раз"
                      inputName="password_repeat"
                      message="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."
                      CSSсlasses="bottom-input"
                  />
              </Block>

              <Block line={false}>
                  <InputText
                      label="Электронная почта"
                      inputName="email"
                      message="Можно изменить адрес, указанный при регистрации."
                      CSSсlasses={`${styles.inputPassword} top-input`}
                  />


              </Block>
          </div>
      );
}

export default App;
