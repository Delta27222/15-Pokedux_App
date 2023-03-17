//Middleware => Funcion que recibe un store, retorna otra funcion que recibe
// un parametro next, retorna otra funcion que recibe el action
//que se va a disparar
export const logger = (store) => (next) => (action) => {
  //next => funcion que llamaremos cuando el middleware termine el trabajo
  //action => informacion de lo que esta sucediendo
  console.log(action);
  next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{name: 'eddi'}, ...actionInfo.action.payload];
  const updatedActionInfo ={
    ...actionInfo,
    action:{ ...actionInfo.action,payload: featured }
  }
  next(updatedActionInfo)
}

export const addActivationProps = (store) => (next) => (actionInfo) => {
  const newPayload = actionInfo.action.payload.map((pokemon) => pokemon.isActive = true);
  const newActionInfo = {...actionInfo, payload: newPayload}
  next(newActionInfo)
}