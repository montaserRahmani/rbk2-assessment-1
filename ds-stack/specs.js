var assert = chai.assert;
var expect = chai.expect;
describe('ds-stack', function() {

  it('should insert values correctly', function() {
  	var stack = Stack();	
   	stack.add(1);
   	stack.add(2);
   	var result = stack._storage[1];
   	expect(result).to.eql(2);
  });

  it('should remove the last value and return it', function() {
  	var stack = Stack();	
   	stack.add(1);
   	stack.add(3);
   	var result = stack.remove();
   	expect(result).to.eql(3);
  });

});
