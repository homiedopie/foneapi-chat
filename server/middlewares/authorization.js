const sessionService = require('./../services/session')
const ForbiddenError = require('./../errors/forbidden-error')

function authorizationMiddleware(request, response, next) {
    if (request.session && sessionService.isLoggedIn(request.session))  {
        return next()
    }

    throw new ForbiddenError('Unauthorized');
}

module.exports = {
    authorizationMiddleware
}