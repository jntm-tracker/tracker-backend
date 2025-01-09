import { TextBodyParserMiddleware } from './text-body-parser.middleware';

describe('TextBodyParserMiddleware', () => {
  it('should be defined', () => {
    expect(new TextBodyParserMiddleware()).toBeDefined();
  });
});
