import config from '../config';

function create(video) {
  return fetch(`${config.CONFIG_DB_HOST}/videos?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  }).then(async (serverResponse) => {
    if (serverResponse.ok) {
      const response = await serverResponse.json();
      return response;
    }

    throw new Error('Não foi possível carrear os dados. :(');
  });
}

export default {
  create,
};
