import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initState = {
        users: [],
        user: {},
        loading: false,
    }
    
    const [state, dispatch] = useReducer(githubReducer, initState)

    //Get Search results
    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(
            `${GITHUB_URL}/search/users?${params}`,
            {
                headers: {
                    Authorization: `${GITHUB_TOKEN}`,
                },
            })

        const {items} = await response.json()
        
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    //Get single user
    const getUser = async (login) => {
        setLoading()
        
        const response = await fetch(
            `${GITHUB_URL}/users/${login}`,
            {
                headers: {
                    Authorization: `${GITHUB_TOKEN}`,
                },
            })
        
        if(response.status === 404){
            window.location = "/notfound"
        }else{
            const data = await response.json()

            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }

        
    }

    //Clear search results
    const clearResults = () => {
        setLoading()
        dispatch({
            type: 'CLEAR_USERS',
        })
    }

    //Set Loading
    const setLoading = () =>{
        dispatch({
            type: 'SET_LOADING'
        })
    }

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        getUser,
        clearResults,                
    }}>
        {children}
    </GithubContext.Provider>
}
export default GithubContext