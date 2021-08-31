import React, { useRef, useState, useEffect } from "react";
import { connect } from 'react-redux';
import {
    setNameAction
} from './Redux/action'


function mapStateToProps(state) {
    debugger
    return {
        
        details: state.details.details
    };
}

const mapDispatchToProps = (dispatch) => ({
    
})


export default connect(mapStateToProps, mapDispatchToProps)
(function ComponentB(props) {
    const [nametoset, setname] = useState()

    // const {
    //     SETvideoDetails,
    //    פונקציות שכתובות בACTION
    // } = props;
    const {
        details
    } = props;

    
    // useEffect(function () {
    //   נכנס בטעינת הדף 
    //   אם הסוגרים ריקות קורה רק בפעם הראשונה
    //   אם לא כל פעם שמתעדכן מה שבסוגריים
    // }, [recording]);

//מה שחוזר לתצוגה
    return (
        <>
         <h1>{details.name}</h1>
        </>

    )
})