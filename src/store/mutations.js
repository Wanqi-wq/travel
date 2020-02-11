export default {
  changeCity(state, payload) {
    state.city = payload
    try { 
      localStorage.city = payload
    }catch(e) {
      console.log(e)
    }
    
  }
}