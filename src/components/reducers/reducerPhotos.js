export default function(statePhotos, action) {
    switch (action.type) {
        case 'add':
            return [
                ...statePhotos,
                {
                    id: Date.now(),
                    title: action.title,
                    body: action.body,
                    completed: false
                }
            ]
        default:
            return statePhotos
    }
}

