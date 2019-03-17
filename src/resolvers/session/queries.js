module.exports = {
    Session: {
        users: parent => parent.getUsers(),
        messages: parent => parent.getMessages(),
        sessionType: parent => parent.getSessionType()
    }
};
