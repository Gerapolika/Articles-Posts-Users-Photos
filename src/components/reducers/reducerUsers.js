export default function(stateUsers, action) {
    switch (action.type) {
        case 'add':
            return [
                ...stateUsers,
                {
                    id: Date.now(),
                    title: action.title,
                    email: action.email,
                    phone: action.phone,
                    completed: false
                }
            ]
        default:
            return stateUsers
    }
}

