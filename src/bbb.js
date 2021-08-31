import React, { useRef, useState, useEffect } from "react";
import { connect } from 'react-redux';
import {
    setNameAction
} from './Redux/action'


function mapStateToProps(state) {
    return {
        details: state.details.details
    };
}

const mapDispatchToProps = (dispatch) => ({
    setNameAction: (name) => dispatch(setNameAction(name)),
    
})


export default connect(mapStateToProps, mapDispatchToProps)
(function ComponentA(props) {
    const [nametoset, setname] = useState()

    const LeaveName = (event) => {
        debugger;
        setname(event);
    };

    // const {
    //     SETvideoDetails,
    //    פונקציות שכתובות בACTION
    // } = props;

    
    // useEffect(function () {
    //   נכנס בטעינת הדף 
    //   אם הסוגרים ריקות קורה רק בפעם הראשונה
    //   אם לא כל פעם שמתעדכן מה שבסוגריים
    // }, [recording]);

//מה שחוזר לתצוגה
    return (
        <>
      <h1>{props.details.name}</h1>
      

        </>

    )
})