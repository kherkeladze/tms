/**
 * Created by Aka on 4/23/16.
 */

'use strict';

class responseController {

    static success(data) {
        return { status : "success", data : data };
    }

    static error(message) {
        return { status : "error", errors : message };
    }

}

module.exports = responseController;