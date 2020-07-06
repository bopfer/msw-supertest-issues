import fetch from 'node-fetch';

const API_BASE_URL = `https://localhost:9000/sites`;
const API_KEY = `blah-blah-blah`;

const headers = {
  'content-type': `application/json;charset=utf-8`,
  authorization: `Basic ${API_KEY}`,
};

const sitesCreated = async () => {
  const response = await fetch(`${API_BASE_URL}/created`, { headers }).catch((error) => {
    throw error;
  });

  console.log(response);

  if (response.ok) {
    const json = (await response.json()) as string[];
    return json;
  }

  return [];
};

export { sitesCreated };
