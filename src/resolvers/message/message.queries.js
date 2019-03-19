module.exports = {
    Message: {
        session: parent => parent.getSession(),
        user: parent => parent.getUser()
    }
};
