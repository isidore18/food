import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from'react-navigation'; // pass data to a component without having to "cross through " elements in the middle


const ResultsList = ({ title, results, navigation}) => {
    if (!results.length) {
        return null
    }
    return (
        <View style={styles.container} >
           <Text style={styles.title} >{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator= {false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem= {({item})=> {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id})}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            ></FlatList>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
  });

  export default withNavigation(ResultsList);