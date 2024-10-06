const holaMundo = require('./index');

test('Deberia devolver "Hola Mundo"',()=>{
    expect(holaMundo()).toBe("Hola Mundo");
});