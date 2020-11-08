import React, {useEffect} from "react";
import {connect} from "react-redux";
import {changeCurrentPage} from "../actions";


const withCurrentPage = (Component, currentPage) => {

    const WithPage = (props) => {
        useEffect(() => {
            changeCurrentPage(currentPage);
        }, []);

        return <Component {...props} />
    }

    const mapDispatchToProps = (dispatch) => ({changeCurrentPage: dispatch(changeCurrentPage(currentPage))});

    return connect(null, mapDispatchToProps)(WithPage);
};


export default withCurrentPage;