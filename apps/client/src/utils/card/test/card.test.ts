import { IDFrom } from 'src/utils/card';

it('should create and ID from a title', () => {
  const id = IDFrom('Web Development');
  expect(id).toBe('web-development');
});
