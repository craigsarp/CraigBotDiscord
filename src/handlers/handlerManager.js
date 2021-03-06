module.exports = (client) => {
    client.handlers = {
        reviewChecker: (m) => require("./reviewChecker")(client, m),
        slashCommand: (i) => require("./slashCommand")(client, i),
        slashCommandHandler: () => require("./slashCommandHandler")(client),
        rubenBTS: (oldp, newp) => require("./RubenBTS")(client, oldp, newp),
        newMember: (member) => require("./newMember")(client, member),
        loadCommands: () => require("./loadCommands")(client),
        commandHandler: (m) => require("./commandHandler")(client, m),
        error: (err) => require("./error")(client, err),
        requestHandler: (message, args, command, sendMessage = true) => require("./requestHandler")(client, message, args, command, sendMessage)
    }
}
