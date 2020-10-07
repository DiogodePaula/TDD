describe('example tests width jest', () => {
  it('should some two numbers and get the result', () => {
    const y = 10;
    const x = 5;
    const som = x + y;

    expect(som).toBe(15);
  });

  it('should merge two words in one', () => {
    const a = 'hello';
    const b = 'World';

    const word = a + b;
    expect(word).toBe('hello World');
  });
});
