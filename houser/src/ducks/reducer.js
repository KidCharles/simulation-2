// 1.) INITIAL STATE
const initial_state = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    houses: [],
    mortgage: 0,
    rent: 0
}


// 2.) CONST VARIABLES
const ADD_NAME = 'ADD_NAME';
const ADD_ADDRESS = 'ADD_ADDRESS';
const ADD_CITY = 'ADD_CITY';
const ADD_STATE = 'ADD_STATE';
const ADD_ZIP = 'ADD_ZIP';
const ADD_IMG = 'ADD_IMG';
const ADD_MORTGAGE = 'ADD_MORTGAGE';
const ADD_RENT = 'ADD_RENT';



// 3.) REDUCER FUNCTION

export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case ADD_NAME:
            return Object.assign({}, state, { name: action.payload })
        case ADD_ADDRESS:
            return Object.assign({}, state, { address: action.payload })
        case ADD_CITY:
            return Object.assign({}, state, { city: action.payload })
        case ADD_STATE:
            return Object.assign({}, state, { state: action.payload })
        case ADD_ZIP:
            return Object.assign({}, state, { zip: action.payload })
        case ADD_IMG:
            return Object.assign({}, state, { img: action.payload })
        case ADD_MORTGAGE:
            return Object.assign({}, state, { mortgage: action.payload })
        case ADD_RENT:
            return Object.assign({}, state, { rent: action.payload })
        default:
            return state;
    }
}


// 4.) ACTION CREATORS

export function addName(name) {
    return {
        type: ADD_NAME,
        payload: name
    }
}

export function addAddress(address) {
    return {
        type: ADD_ADDRESS,
        payload: address
    }
}

export function addCity(city) {
    return {
        type: ADD_CITY,
        payload: city
    }
}

export function addState(state) {
    return {
        type: ADD_STATE,
        payload: state
    }
}

export function addZip(zip) {
    return {
        type: ADD_ZIP,
        payload: zip
    }
}

export function addImg(img) {
    return {
        type: ADD_IMG,
        payload: img
    }
}

export function addMortgage(num) {
    return {
        type: ADD_MORTGAGE,
        payload: num
    }
}

export function addRent(num) {
    return {
        type: ADD_RENT,
        payload: num
    }
}