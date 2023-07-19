import { helloWorld } from '../../src/index';

describe('helloWorld Function', () => {
  it('should call console.log with "Hello, world!"', () => {
    console.log = jest.fn();

    helloWorld();

    expect(console.log).toHaveBeenCalledWith('Hello, world!');
  });
});
