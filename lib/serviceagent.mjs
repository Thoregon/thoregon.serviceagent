/*
 *
 * @author: Martin Neitz, Bernhard Lukassen
 */

import ThoregonEntity, { ThoregonObject } from "/thoregon.archetim/lib/thoregonentity.mjs";

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
