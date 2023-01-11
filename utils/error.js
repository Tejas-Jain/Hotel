export default function createError(status, message){
    const newError = new Error();
    newError.status = status;
    newError.message = message;
    return newError;
}