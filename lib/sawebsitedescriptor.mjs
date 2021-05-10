/*
 *
 * @author: Martin Neitz
 */

import ServiceAgentDescriptor from "./sadescriptor.mjs";

export default class ServiceAgentWebsiteDescriptor extends ServiceAgentDescriptor {

    //  OHS - Open Host Service
    //  defines the attributes / methods / events
    //  implementation of the business functionality
    //  e.g.: add serviceAgent into serviceAgent Directory



    static objectSchemaAttributes() {
        let schema = super.objectSchemaAttributes();

        return Object.assign(schema, {
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
        });
    }

    static objectSchemaCommands() {
        let schema = super.objectSchemaCommands();

        return Object.assign(schema, {
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

        });
    }
}
 