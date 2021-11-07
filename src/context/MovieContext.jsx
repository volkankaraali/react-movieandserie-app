import { createContext, useContext, useEffect, useState } from "react";
import MovieService from "../services/movieService";

const MovieContext =createContext();

export const MovieProvider = ({children}) =>{
    
    const [comingSoon, setComingSoon] = useState([])
    const [top250Movies, setTop250Movies] = useState([])
    const [mostPopularMovies, setMostPopularMovies] = useState([])
    const [top250Series, setTop250Series] = useState([])
    const [mostPopularSeries, setMostPopularSeries] = useState([])

    const [searchInput, setSearchInput] = useState("")
    const [searchType, setSearchType] = useState("")

    const [overRequest, setOverRequest] = useState(false)
    
    useEffect(() => {
        let movieService = new MovieService()
        movieService.getComingSoon().then(result=>{
            
            if(result.data.errorMessage){
                setOverRequest(true)
                console.log("over request");
            }
            setComingSoon(result.data.items)
        })
        
        movieService.getTop250Movies().then(result=>{
            if(result.data.errorMessage){
                setOverRequest(true)
                console.log("over request");
            }
            //console.log(result.data.items);
            setTop250Movies(result.data.items)
            
        })
        
        movieService.getMostPopularMovie().then(result=>{
            if (result.data.errorMessage) {
                setOverRequest(true)
                console.log("over request");
            }
            setMostPopularMovies(result.data.items)
        })

        movieService.getTop250Series().then(result=>{
            if(result.data.errorMessage){
                setOverRequest(true)
                console.log("over request");
            }
            //console.log(result.data.items);
            setTop250Series(result.data.items)
            
        })
    
        movieService.getMostPopularSeries().then(result=>{
            if(result.data.errorMessage){
                setOverRequest(true)
                console.log("over request");
            }
            setMostPopularSeries(result.data.items)
        })

    }, [])

    //console.log(comingSoon);
    //console.log(top250Movies);

    const values={
        comingSoon,
        top250Movies,
        mostPopularMovies,
        top250Series,
        mostPopularSeries,
        searchInput,
        setSearchInput,
        setSearchType,
        searchType,
        overRequest
    }
    return <MovieContext.Provider value={values}> {children}</MovieContext.Provider>
    

}

export const useMovie =() =>useContext(MovieContext);