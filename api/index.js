const express = require('express');
const route = express.Router();
const controller = require('./controller')

route.post('/saveformdata', (req, res, next) =>

    controller
        .create(req)
        .then((data) => res.status(200).json(data))
        .catch((err) => next(err))
);
route.post('/editformdata', (req, res, next) =>
    controller
        .editdata(req)
        .then((data) => res.status(200).json(data))
        .catch((err) => next(err))
);

route.get('/getformdata/:userid', (req, res, next) => {
    controller.getdata(req).
        then((data) => res.status(200).json(data))
        .catch((err) => next(err))
})


route.post('/delete', (req, res, next) => {
    controller.deletedata(req)
        .then((data) => res.status(200).json(data))
        .catch((err) => next(err))
})
route.post('/isUserExist', (req, res, next) => {
    controller.userExist(req)
        .then((data) => res.status(200).json(data))
        .catch((err) => next(err))
})




module.exports = route


// 1 req
// The req object represents the incoming HTTP request and contains information about the client's request, such as headers, parameters, query strings, and the request body.
// 2 res
// The res object represents the HTTP response that the server will send back to the client
// 3 next
// next trigger to other routes 