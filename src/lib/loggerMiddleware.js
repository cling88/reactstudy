// redux-logger 미사용

const loggerMiddleware = store => next => action => {
    // 미들웨어 기본 구조
    console.group(action && action.type);
    console.log('previsous state: ', store.getState());
    console.log('action :', action);
    next(action);
    console.log('next State: ', store.getState());
    console.groupEnd();  
}

export default loggerMiddleware