import {ColourMix, LargestProduct, DayoftheWeek, PayRaise, isLeap} from "./functions.js";
  
  function Question1() {
    return <section>
      <h2>1. Colour Mix</h2>
      <p>First colour: red Second colour: blue colour_mix(red, blue) -> {ColourMix("red", "blue")}</p>
      <p>First colour: green Second colour: blue colour_mix(green, blue) -> {ColourMix("green", "blue")}</p>
      <p>First colour: green Second colour: red colour_mix(green, red) -> {ColourMix("green", "red")}</p>
    </section>;
  }
  
  function Question2() {
    return <section>
      <h2>2. Largest Product</h2>
      <p>First value: 10 Second value: 5 Third value: 20 largest_product(10, 5, 20) -> {LargestProduct(10, 5, 20)}</p>
      <p>First value: -8 Second value: 12 Third value: 20 largest_product(-8, 12, 20) -> {LargestProduct(-8, 12, 20)}</p>
      <p>First value: 3 Second value: 2 Third value: 1 largest_product(3, 2, 1) -> {LargestProduct(3, 2, 1)}</p>
    </section>;
  }
  
  function Question3() {
    return <section>
      <h2>3. Day of the Week</h2>
      <p>Please enter a number between 1 and 7: 1 day_of_the_week(1) -> {DayoftheWeek(1)}</p>
      <p>Please enter a number between 1 and 7: 5 day_of_the_week(5) -> {DayoftheWeek(5)}</p>
      <p>Please enter a number between 1 and 7: 8 day_of_the_week(8) -> {DayoftheWeek(8)}</p>
    </section>;
  }
  
  function Question4() {
    return <section>
      <h2>4. Pay Raise</h2>
      <p>pay_raise('F', 2, 25000) -> {PayRaise('F', 2, 25000)}</p>
      <p>pay_raise('F', 11, 40000) -> {PayRaise('F', 11, 40000)}</p>
      <p>pay_raise('P', 3, 30000) -> {PayRaise('P', 3, 30000)}</p>
    </section>;
  }
  
  function Question5() {
    return <section>
      <h2>5. Leap Year</h2>
      <p>is_leap(2000) -> {isLeap(2000).toString()}</p>
      <p>is_leap(1900) -> {isLeap(1900).toString()}</p>
      <p>is_leap(2024) -> {isLeap(2024).toString()}</p>
    </section>;
  }
  
  export {Question1, Question2, Question3, Question4, Question5};