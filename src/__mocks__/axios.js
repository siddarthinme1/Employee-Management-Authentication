// __mocks__/axios.js
const mockResponse = {
  data: [], // Mock response data as needed
};

export default {
  post: jest.fn(() => Promise.resolve(mockResponse)),
  get: jest.fn(() => Promise.resolve(mockResponse)),
};
