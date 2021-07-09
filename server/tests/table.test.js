
const app = require('../server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

beforeAll(async() => {
  process.env.NODE_ENV = 'test';
})


test('getFilesList - only two files', async done => {
 const response =  await request.get('/api/getFilesList');
  expect(response.status).toBe(200);
  expect(response.body.length).toEqual(2);
  done()
});

test('getFileContent - two tables in a.json file', async done => {
  const response = await request.get('/api/getFileContent/?file_name=a.json');
  expect(response.status).toBe(200);
  expect(response.body.tables.length).toEqual(2);
  done()
});

test('getFileContent - send file name does not exists', async done => {
  const response = await request.get('/api/getFileContent/?file_name=not_exists.json');
  expect(response.status).toBe(500);
  done()
});

afterAll(async () => {
  console.log("after all tests")
});