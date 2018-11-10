
const initState ={
    posts:[
        {id: '1', title: 'This is the Title', body:'gdsajfdg f fdgjgdga afagldhga adh adhghga'},
        {id: '2', title: 'This is th3e Title', body:'gdsajfdg f fdgjgdga afagldhga adh adhghga'},
        {id: '3', title: 'This is thse Title', body:'gdsajfdg f fdgjgdga afagldhga adh adhghga'}
    ]
}
const rootReducer = (state = initState,action) =>{
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post =>{
            return action.id !== post.id
        });
        return {
            ...state,
            posts:newPosts
        }
    }
    console.log(action);
    return state;

}
export default rootReducer;