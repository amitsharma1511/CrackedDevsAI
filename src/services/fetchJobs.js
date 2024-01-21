//'technologies' allows you to filter by coding skills such as 'react', 'html' jobs etc
//'skill_levels' allows you to filter by junior, mid, senior positions
import axios from 'axios';

const API_KEY = import.meta.env.VITE_CRACKED_API_KEY;

export async function fetchJobs() {
  const response = await axios.get(`https://api.crackeddevs.com/api/get-jobs`, {
    headers: {
      'api-key': API_KEY,
    },
  });
  //   console.log('RESPONSE DATA from api fn', response.data);
  return response.data;
}
export async function fetchOneJob(id) {
  const response = await axios.get(
    `https://api.crackeddevs.com/api/get-jobs?id=${id}`,
    {
      headers: {
        'api-key': API_KEY,
      },
    }
  );
  //   console.log('RESPONSE DATA from api fn', response.data);
  return response.data;
}
