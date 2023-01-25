import axios from 'axios'


const baseUrl = "https://imdb-api.com/en/API"

export const imdbApiService = {
    movies: {
        comingSoon: () => {
            let apiUrl = `${baseUrl}/ComingSoon/${process.env.REACT_APP_IMDB_API_KEY}`
            return axios.get(apiUrl)
        },
        getTop250Movies: () => {
            let apiUrl = `${baseUrl}/Top250Movies/${process.env.REACT_APP_IMDB_API_KEY}`
            return axios.get(apiUrl)
        },
        getMostPopularMovies: () => {
            let apiUrl = `${baseUrl}/MostPopularMovies/${process.env.REACT_APP_IMDB_API_KEY}`
            return axios.get(apiUrl)
        }
    },
    series: {
        getTop250Series: () => {
            let apiUrl = `${baseUrl}/Top250TVs/${process.env.REACT_APP_IMDB_API_KEY}`
            return axios.get(apiUrl)
        },
        getMostPopularSeries: () => {
            let apiUrl = `${baseUrl}/MostPopularTVs/${process.env.REACT_APP_IMDB_API_KEY}`
            return axios.get(apiUrl)
        }
    },
    theathers: {
        getAll: () => {
            let apiUrl = `${baseUrl}/Usage/${process.env.REACT_APP_IMDB_API_KEY}`
            return axios.get(apiUrl)
        }
    },
    usage: {
        getUsage: () => {
            let apiUrl = `https://imdb-api.com/API/InTheaters/${process.env.REACT_APP_IMDB_API_KEY}`
            return axios.get(apiUrl)
        }
    }
}

// export default class ImdbApiServicec {

//     getComingSoon() {
//         let apiUrl = `https://imdb-api.com/en/API/ComingSoon/${apiKey}`
//         return axios.get(apiUrl)
//     }

//     getTop250Movies() {
//         let apiUrl = `https://imdb-api.com/en/API/Top250Movies/${apiKey}`
//         return axios.get(apiUrl)
//     }
//     getMostPopularMovie() {
//         let apiUrl = `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`
//         return axios.get(apiUrl)
//     }
//     getTop250Series() {
//         let apiUrl = `https://imdb-api.com/en/API/Top250TVs/${apiKey}`
//         return axios.get(apiUrl)
//     }

//     getMostPopularSeries() {
//         let apiUrl = `https://imdb-api.com/en/API/MostPopularTVs/${apiKey}`
//         return axios.get(apiUrl)
//     }

//     getById(id) {
//         let apiUrl = `https://imdb-api.com/en/API/Title/${apiKey}/${id}`
//         return axios.get(apiUrl)
//     }

//     searchTitleByType(type, title) {
//         let apiUrl = `https://imdb-api.com/en/API/${type}/${apiKey}/${title}`
//         return axios.get(apiUrl)

//     }

//     searchTitle(title) {
//         let apiUrl = `https://imdb-api.com/en/API/SearchTitle/${apiKey}/${title}`
//         return axios.get(apiUrl)
//     }

// }