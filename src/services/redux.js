export function mapStateToProps(state) {
    return {
        settings: state.settingsReducer
    };
}