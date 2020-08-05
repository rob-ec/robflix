const CONFIG_DB_HOST = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://robflix-sigma.herokuapp.com';

export default {
  CONFIG_DB_HOST,
};
