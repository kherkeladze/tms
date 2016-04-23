/**
 * Created by Aka on 4/23/16.
 */

'use strict';

let messages = require('./lang/messages');
let _ = require('lodash');

class Helper {

    static mongoosePrettyErrors(err){

        let prettyErrors = [];

        if(err.name = "ValidationError"){

            _.forOwn(err.errors, error => {

                if(error.properties.type == 'required')
                    prettyErrors.push(`${error.properties.path} ${messages.REQUIRED_FIELD}`);

                if(error.properties.type == 'minlength')
                    prettyErrors.push(`${error.properties.path}'s ${messages.MIN_LENGTH} ${error.properties.minlength}`);

                if(error.properties.type == 'maxlength')
                    prettyErrors.push(`${error.properties.path}'s ${messages.MAX_LENGTH} ${error.properties.maxlength}`);

            });

        }

        return err;

    }
}

module.exports = Helper;