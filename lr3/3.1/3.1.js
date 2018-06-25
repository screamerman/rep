var calculator = {  
read: function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
 },
  plus: function() {
    return this.a + this.b;
  },

  multiply: function() {
    return this.a * this.b;

  }
}

calculator.read();
alert( calculator.plus() );
alert( calculator.multiply() );
