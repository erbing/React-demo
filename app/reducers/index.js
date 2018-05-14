export default (state, action) => {
    switch (action.type) {
        case 'CHANGE_NAME': 
        return {
            card: {
                name: state.name,
                avator: state.avator
            }
        }

        case 'SHOW_DIALOG':
        return {
            card: state.card,
            dialog: {
                status:  true
            }
        }
    }
}