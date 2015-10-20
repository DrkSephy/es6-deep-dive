// Arrow functions don't shadow (this), which is lexical to current scope
class Component {
  constructor() {
      let button = document.getElementById('myButton');
      button.addEventListener('click', () => {
          console.log('CLICK');
          this.handleClick(); // Fat arrow handles this for us
      });
  }

  // extend Component class with handleClick function
  handleClick() {
      ···
  }
}