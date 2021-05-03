/*
 *
 * @author: Martin Neitz
 */

import ThoregonObject from "/thoregon.tru4D/lib/thoregoneobject.mjs";

export default class ServiceAgent extends ThoregonObject {

    //  OHS - Open Host Service
    //  defines the attributes / methods / events
    //  implementation of the business functionality
    //  e.g.: add serviceAgent into serviceAgent Directory
    //  THE RUNTIME INSTANCE


    static objectSchema() {
        let objectSchema = {};
        return Object.assign(objectSchema, {
            meta: {
                description: '',
            },
            attributes: {},
            methods: {},
            events: {},
            commands: {},
        });
    }

}
 