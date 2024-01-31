import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import Vault from "../05_Elementy_statyczne/Solution/staticSolution.js";
import BankAccount from "../06_Kontrola_dostepu/Solution/index.js"

console.log(Vault.returnKey());
const myAccount = new BankAccount("123456789");
myAccount.displayAccountInfo();
myAccount.deposit(100);
myAccount.displayAccountInfo();
myAccount.withdraw(50);
myAccount.displayAccountInfo();
myAccount.balance2 = -20;
myAccount.displayAccountInfo();

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>${Vault.returnKey()}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
