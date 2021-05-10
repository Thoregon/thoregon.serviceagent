/*
 *
 * @author: Martin Neitz
 */

import ThoregonObject from "/thoregon.tru4D/lib/thoregoneobject.mjs";

export default class Sadescriptor extends ThoregonObject {

    //  OHS - Open Host Service
    //  defines the attributes / methods / events
    //  implementation of the business functionality
    //  e.g.: add serviceAgent into serviceAgent Directory


    static objectSchemaMeta() {
        let schema = super.objectSchemaMeta();

        return Object.assign(schema, {

        });
    }

    static objectSchemaAttributes() {
        let schema = super.objectSchemaAttributes();

        return Object.assign(schema, {
            name: '',
            owner: {},
        });
    }

    static objectSchemaMethods() {
        let schema = super.objectSchemaMethods();

        return Object.assign(schema, {

        });
    }

    static objectSchemaEvents() {
        let schema = super.objectSchemaEvents();

        return Object.assign(schema, {

        });
    }

    static objectSchemaCommands() {
        let schema = super.objectSchemaCommands();

        return Object.assign(schema, {

        });
    }


    static objectSchema() {
        let objectSchema = {};

        return Object.assign(objectSchema, {
            meta: {
                '@created': '',
                '@changed': '',
                '@context': '',
                name: '',
                description: ''
            },
            attributes: {
                name: '',
                owner: {},
            },
            methods: {},
            events: {},
            commands: {     // transactions
                create: {
                    description: '',
                    command: '/lib/commands/create.mjs',
                },
                delete: {},
                modify: {},
                verify: {},
                provision: {},
                activate: {},       // payment received and SA verified
                deactivate: {},     // payment subscritpion canceled or SA verification faild

            },
        });
    }

}
 