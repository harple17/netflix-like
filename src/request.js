const API_KEY = "fa184ec8de620662125bd557c6ce8c16";

export const requests = {
    fetchTreanding:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fatchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/discover/tv?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies:`/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentMovies:`/discover/tv?api_keys=${API_KEY}&with_genres=99`,
}