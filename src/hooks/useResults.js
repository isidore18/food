import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', { 
                params: {
                    limit: 50,
                    term: searchTerm, // es6 syntax => replaces term: term
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    // used to make a call to a function only once (or more depending on the second argument []) when component is rendered for the first time
    useEffect( () => {
        searchApi('pasta');
    }, []);


    return [searchApi, results, errorMessage];
}