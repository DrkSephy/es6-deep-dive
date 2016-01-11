function Component {
  var _this = this; // Copy instance of this pointer
  var button = document.getElementById('myButton');
  button.addEventListener('click', function () {
      console.log('CLICK');
      _this.handleClick(); // Inner instance of this
  });
}

// Extend prototype with handleClick function
UiComponent.prototype.handleClick = function () {
  ···
};

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