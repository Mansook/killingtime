const { default: client } = require("../client");

export const readTests = ({ bookid }) => client.get(`/api/test/${bookid}`);

export const readTestHistory = ({ testid }) =>
  client.get(`/api/test/history/${testid}`);

export const createTest = ({ bookid, data }) =>
  client.post(`/api/test/${bookid}`, { data });

export const submitTest = ({ testid, data }) =>
  client.patch(`/api/test/history/${testid}`, { data });
