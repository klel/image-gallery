import Unsplush from '../Unsplash/Unsplash';

const getUrl:string= 'https://api.unsplash.com/photos';
const u = new Unsplush(getUrl);

test('adds 1 + 2 to equal 3', () => {
   expect(u.search('hello')).resolves.toBe(10) ;
  });