import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer CSUM0UVO6DwLfpAtwF_5B_x2lVyV0kSdwBMT6-_oexQt1lCcgPdj22wweaG7MLX7q2ileLigo7DTYSkfAA1hT8ZwZ6cAvMi6M4OEAzgK2dPz4GIBGXn0HuipP_jgY3Yx'
    }
});


