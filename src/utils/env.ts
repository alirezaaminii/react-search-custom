
export const getAPIBaseURL = function () {
  return process.env.API_BASE_URL;
};
export const getAPIMocking = function () {
  return process.env.API_MOCKING === 'enabled';
};