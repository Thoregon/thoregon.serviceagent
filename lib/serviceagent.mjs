/*
 *
 * @author: Martin Neitz
 */

import ThoregonObject from "/thoregon.tru4D/lib/thoregoneobject.mjs";

export default class ServiceAgent extends ThoregonObject {

    //  defines the attributes / methods / events
    //  implementation of the business functionality
    //  e.g.: add serviceAgent into serviceAgent Directory


    static objectSchema() {
        let objectSchema = {};
        return Object.assign(objectSchema, {
            attributes: {
                owner: {},
                name: {},
                shortName: {},
                image169: {},
                imageIcon: {},
                subline: {},
                domain: {},
                aboutLink: {},
                visibleInServiceDirectory: {
                    default: true
                },
                enabledLogin: {},
                enabledComment: {},
                enabledChat: {},
                enabledVideoHosting: {},
                enabledHostedSSI: {},
                verified: {},
                disabled: {}
            },
            methods: {},
            events: {},
        });
    }

}
 