const maxMoney = require('./houseRobber')
test('checking the max Money in arr test case1',()=>{
    expect(maxMoney([1,2,3,1])).toBe(4)
    
})
test('checking the max Money in arr test case2 ',()=>{
   
    expect(maxMoney([2,7,9,3,1])).toBe(12)
})
test('checking the max Money in arr with zero length',()=>{
   
    expect(maxMoney([])).toBe(0)
})