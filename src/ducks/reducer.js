//SET INITIAL STATE
const initialState = {
   username: '',
   password: '',
   propertyName: '',
   propertyDescription: '',
   address: '',
   city: '',
   state: '',
   zip: '',
   imageURL: '',
   loanAmount: '',
   monthlyMortgage: '',
   desiredRent: ''
}


const UPDATE_USERNAME = "UPDATE_USER_NAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";



export default function reducer(state = initialState, action) {
   switch(action.type) {

      case UPDATE_USERNAME:
         return Object.assign({}, state, {username: action.payload})
            

      case UPDATE_PASSWORD:
         return Object.assign({}, state, {password: action.payload})

      default: return state;
   }
}


export function updateUsername(username) {
   return {
      type: UPDATE_USERNAME,
      payload: username
   }
}

export function updatePassword(password) {
   return {
      type: UPDATE_PASSWORD,
      payload: password
   }
}