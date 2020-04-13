// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterByPrice = price => {
        return results.filter( result => {
            return result.price === price
        })
    }
    return (
        // the use of the <></> empty element allows the content that has many object to use 100% of the available space
        <> 
            <SearchBar 
                term ={term} 
                onTermChange={ setTerm }
                onTermSubmit={ () => searchApi(term) }
            />
            {errorMessage ? <Text>{errorMessage}</Text>:null}
            <ScrollView>
                <ResultsList title="Cheap"  results={filterByPrice('$')}/>
                <ResultsList title="Medium" results={filterByPrice('$$')}/>
                <ResultsList title="Expensive" results={filterByPrice('$$$')} />
                <ResultsList title="Very Expensive" results={filterByPrice('$$$$')} />
            </ScrollView>
        </>
    );
  }
  
  const styles = StyleSheet.create({
  
  });

  export default SearchScreen;
  