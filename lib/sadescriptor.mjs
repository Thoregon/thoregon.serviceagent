/*
 *
 * @author: Martin Neitz
 */


import SchemaBuilder          from "/thoregon.tru4D/lib/schema/builder/schemabuilder.mjs";

export default class ServiceAgentDescriptor {

    //  OHS - Open Host Service
    //  defines the attributes / methods / events
    //  implementation of the business functionality
    //  e.g.: add serviceAgent into serviceAgent Directory

    constructor(props) {
        Object.assign(this, props);
    }

}

universe.dorifer.getContext("thoregon.servcieagent").addEntitySchema(ServiceAgentDescriptor, (() => {
    let schemaBuilder = SchemaBuilder.entity("ServiceAgentDescriptor");
    schemaBuilder
        .meta()
            .description("")
            .icon("")
            .version()
        .attributes()
            .string     ( "alias" ).mandatory()
        .commands()
            .CUD()
            .command("provision")
            .command("activate")
            .command("deactivate");
    return schemaBuilder.build();
})())
