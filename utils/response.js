/**
 * Created by Aka on 5/7/16.
 */

'use strict';

class Response {

    static success(res, data) {
        return res.status('200').json(data);
    }

    static error(res, data) {
        return res.status('400').json(data);
    }

}

module.exports = Response;