export const initialState = {
    user:null,
    playlist:[],
    playing:false,
    item:null,
    discover_weekly:null,
    token:null 
    // remove token after finished developing
     //token:'BQA4rHeCppw4Ic_AzR_L3dwLq4KFNIBjQJPnMuGJIL_YT2uVSgdBK0TJYtWTKA8FMqeFpudM-JYmyJ1oz_RfuxZXovFKG3arcKYZTOxLKZcQ7qlTK7f4rUoIF7UBC39kIkkhzCDBi_KvTqhObeeA4neSirquoagENcc'
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }  
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist:action.playlist
            }      
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing:action.playing
            }
        case 'SET_ITEM':
            return {
                ...state,
                item:action.item
            }
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        default:
            return state;    
    }
}

export default reducer;