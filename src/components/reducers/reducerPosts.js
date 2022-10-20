export default function(statePosts, action) {
    switch (action.type) {
        case 'add':
            return [
                ...statePosts,
                {
                    id: Date.now(),
                    title: action.title,
                    body: action.body,
                    completed: false
                }
            ];
        case 'delete':
            console.log(statePosts)
            console.log(statePosts.filter(item => item.id !== action.articleId))
            console.log(action.articleId)
            return statePosts.filter(item => item.id !== action.articleId)
        default:
            return statePosts
    }
}

