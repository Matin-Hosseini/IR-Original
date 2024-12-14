import "./counter.css";
import './style.scss'

const counter = () => {
  let count = 0;
  console.log("this is the counter", count);

  return {
    increment: (number) => {
      number ? (count += number) : (count += 1);
      console.log("count increased ", count);
    },
    decrement: (number) => {
      number ? (count -= number) : (count -= 1);
      console.log("count decreased ", count);
    },
    render: () => {
      document.body.insertAdjacentHTML(
        "beforeend",
        `
          <div class="counter">
            <h1>${count}</h1>
          </div>
        `
      );
    },
  };
};

export default counter;
