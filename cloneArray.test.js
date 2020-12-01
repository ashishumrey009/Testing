const cloneArray = require('./cloneArray')

test('clone array',()=>{
    const array=[1,2,3]
    expect(cloneArray(array)).toEqual(array)
})