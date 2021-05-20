/*
 *
 * @author: Martin Neitz
 */

import SchemaBuilder          from "/thoregon.tru4D/lib/schema/builder/schemabuilder.mjs";

export default class ServiceAgentWebsiteDescriptor {

    constructor(props) {
        Object.assign(this, props);
    }

}

universe.dorifer.context("thoregon.serviceagent").addEntitySchema(ServiceAgentWebsiteDescriptor, (() => {
    let schemaBuilder = SchemaBuilder.entity("ServiceAgentWebsiteDescriptor");
    schemaBuilder
        // .extend( "./ServiceAgentDescriptor" )
        .meta()
            .description("")
            .icon("")
            .version()
        .attributes()
            .string     ( "shortName" ).mandatory()
            .string     ( "subline" )
            .image      ( "image169" )
            .image      ( "imageIcon" )
            .string     ( "domain" )
            .link       ( "aboutLink" )
            .boolean    ( "visibleInServiceDirectory" ).default( true )
            .collection ( "categories")
            .boolean    ( "enabledLogin")
            .boolean    ( "enabledComment" )
            .boolean    ( "enabledChat" )
            .boolean    ( "enabledVideoHosting" )
            .boolean    ( "enabledHostedSSI" )
            .boolean    ( "verified" )
            .boolean    ( "disabled" )
        .commands()
            .CUD()
            .command("provision")
            .command("activate")
            .command("deactivate");
    return schemaBuilder.build();
})())
