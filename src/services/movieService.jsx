import axios from 'axios'

//const apiKey="k_ogmsjfhr"
const apiKey="k_ywp46odt"


export default class MovieService{

    getComingSoon(){
        let apiUrl=`https://imdb-api.com/en/API/ComingSoon/${apiKey}`
        return axios.get(apiUrl)
    }

    getTop250Movies(){
        let apiUrl=`https://imdb-api.com/en/API/Top250Movies/${apiKey}`
        return axios.get(apiUrl)
    }
    getMostPopularMovie(){
        let apiUrl=`https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`
        return axios.get(apiUrl)
    }
    getTop250Series(){
        let apiUrl=`https://imdb-api.com/en/API/Top250TVs/${apiKey}`
        return axios.get(apiUrl)
    }
    
    getMostPopularSeries(){
        let apiUrl=`https://imdb-api.com/en/API/MostPopularTVs/${apiKey}`
        return axios.get(apiUrl)
    }

    getById(id){
        let apiUrl=`https://imdb-api.com/en/API/Title/${apiKey}/${id}`
        return axios.get(apiUrl)
    }
    
    searchTitleByType(type,title){
        let apiUrl=`https://imdb-api.com/en/API/${type}/${apiKey}/${title}`
        return axios.get(apiUrl)

    }

    searchTitle(title){
        let apiUrl=`https://imdb-api.com/en/API/SearchTitle/${apiKey}/${title}`
        return axios.get(apiUrl)
    }

}