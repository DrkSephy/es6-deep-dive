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