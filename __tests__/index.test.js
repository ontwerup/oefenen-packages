
function add (num1, num2) {
    return num1 + num2;
    
}


test("The add function add 2 numbers and returns the sum", ()=>  {

    // Arrange (=klaarzetten)
    const number1 = 5;
    const number2 = 10;



    // Act (=hoe moet het gaan handelen?)
    const sum = add (number1, number2);



    // Assert (=beweren)
    expect(sum).toBe(15);



})

