import produce from 'immer'


const initialState = {
    details: {
        detailsEmploye:[
        {
            id:'1',
            sumHours:"159:00",
        hours:"155:00",
        handHour:"4:00",
        anoutherHours:"4:00",
        name:"yaniv",
        tv:"203483924"}   ,
        {
            id:'2',
            sumHours:"159:00",
        hours:"155:00",
        handHour:"4:00",
        anoutherHours:"4:00",
        name:"yaniv",
        tv:"203483924"} ,{
            id:'3',
            sumHours:"159:00",
        hours:"155:00",
        handHour:"4:00",
        anoutherHours:"4:00",
        name:"yaniv",
        tv:"203483924"} ,{
            id:'4',
            sumHours:"159:00",
        hours:"155:00",
        handHour:"4:00",
        anoutherHours:"4:00",
        name:"yaniv",
        tv:"203483924"} ,{
            id:'5',
            sumHours:"159:00",
        hours:"155:00",
        handHour:"4:00",
        anoutherHours:"4:00",
        name:"yaniv",
        tv:"203483924"}, {
            id:'6',
            sumHours:"159:00",
        hours:"155:00",
        handHour:"4:00",
        anoutherHours:"4:00",
        name:"yaniv",
        tv:"203483924"}, {
            id:'7',
            sumHours:"159:00",
        hours:"155:00",
        handHour:"4:00",
        anoutherHours:"4:00",
        name:"yaniv",
        tv:"203483924"} ,{
            id:'8',
            sumHours:"159:00",
        hours:"155:00",
        handHour:"4:00",
        anoutherHours:"4:00",
        name:"yaniv",
        tv:"203483924"} ,{
            id:'9',
            sumHours:"159:00",
        hours:"155:00",
        handHour:"4:00",
        anoutherHours:"4:00",
        name:"yaniv",
        tv:"203483924"}, {
            id:'10',
            sumHours:"159:00",
        hours:"155:00",
        handHour:"4:00",
        anoutherHours:"4:00",
        name:"yaniv",
        tv:"203483924"} ,{
            id:'11',
            sumHours:"159:00",
        hours:"155:00",
        handHour:"4:00",
        anoutherHours:"4:00",
        name:"yaniv",
        tv:"203483924"} ,{
            id:'12',
            sumHours:"159:00",
        hours:"155:00",
        handHour:"4:00",
        anoutherHours:"4:00",
        name:"yaniv",
        tv:"203483924"} ],
        name: '',
        age: 0,
        work: ''

    
    }
};


////////////


//////////

export default produce((state, action) => {
    debugger
    switch (action.type) {

        case 'SET_NAME':
            debugger;
            state.details.name = action.payload;
            break;

        default:
            return state;
    }
}, initialState);