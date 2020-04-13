import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 7JZ52DTtNkFs2143C2RsJc89n_HIVq-nG36O2zT3U9ZAn6lwLxFNzSw9coMVxaDTS2OaW6wQgT0eTHSw4_JY8T0v-Y65AwMcMoSMyhnBZyL9Ovydj6SbJRKNdX2NXnYx'
    }
});
