export function handleCors(request, response, next) {
    response.headers["Access-Control-Allow-Origin"] = "http://localhost:8000"; // replace with your domain
    response.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
    next();
}