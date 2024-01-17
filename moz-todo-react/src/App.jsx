import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const note = "Welcome";
const basic = "to our basic react course";
const moderate = "to our moderate react course";
const advanced = "to our advanced react course";
const nametext = "Enter your name";
const leveltext = "How many years of ecperience do you have?";
const level1 = "Beginner";
const level2 = "< 2";
const level3 = "< 5";

function App(){
  return (
    <form>
      <label>Enter your name:
      <input type="text" />
      </label>
      <label>Enter your name:
      <input type="radio" />{level1}
      </label>
    </form>
}
export default App
