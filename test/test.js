const assert = require('chai').assert
const expect = require('chai').expect

const {foo, obj1, arr, add, arr2, doMath } = require('../app')
describe('index file', function() {
  describe('foo', function(){
    it('should return type of string', function(){
      assert.typeOf(foo, 'string', 'foo is a string')
    })
    it('should have value of "bar"', function(){
      assert.equal(foo, 'bar', 'the value of foo is "bar"')
    })
  })
  describe('arr variable', function(){
    it('should contain 4 values', function(){
      assert.lengthOf(arr, 4, 'arr has 4 values')
    })
    it('should have an object at index 3', function(){
      assert.typeOf(arr[3], 'object', 'value is an object')
    })
    it('should have a number at index 0', function(){
      assert.typeOf(arr[0], 'number', 'value is a number')
    })
  })
  describe('obj1 variable', function(){
    it('should have at least 1 value', function(){
      assert.isAbove(Object.keys(obj1).length, 1, 'obj1 has at least 1 key')
    })
    it('should have 2 keys', function(){
      assert.lengthOf(Object.keys(obj1), 2, 'obj1 has 2 keys')
    })
    
  })
  describe('add function', function(){
    it('should be a function', function(){
      expect(add).to.be.a('function')
    })
    it('should return a number', function(){
      expect(add(1,1)).to.be.a('number')
    })
    it('should return a number greater than either given number', function(){
      let num1 = 5
      let num2 = 7
      expect(add(num1,num2)).to.be.above(num1)
      expect(add(num1,num2)).to.be.above(num2)
    })
    it('should return a correct sum of the two numbers', function(){
      expect(add(2,2)).to.equal(4)
      expect(add(9999,9999)).to.equal(19998)
    })
  })
  describe('arr2', function(){
    it('should have no elements below 3', function(){
      for (let value of arr2){
        expect(value).to.be.above(3)
      }
    })
  })

  describe('doMath function', function(){
    it('should return a single value squared', function(){
      expect(doMath(9)).to.equal(81)
    })
    it('should return false with unexpected input in the first position', function(){
      expect(doMath(9, 9)).to.equal(false)
    })
    describe('doMath(add)', function(){
      it('should accurately return the sum of the 2 given numbers', function(){
        expect(doMath('add', 2, 2)).to.equal(4)
      })
    })
    describe('doMath(mult)', function(){
      it('should accurately return the product of the 2 given numbers', function(){
        expect(doMath('mult', 2, 2)).to.equal(4)
      })
    })
    describe('doMath(div)', function(){
      it('should accurately return the quotient of the 2 given numbers', function(){
        expect(doMath('div', 2, 2)).to.equal(1)
      })
    })
  })
  
}
)
