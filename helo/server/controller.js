module.exports = {
    login: (req, res, next) => {
        let { username, password } = req.body;
        const { session } = req;
        // const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            session.user.username = user.username;
            res.status(200).send(session.user);
        } else {
            res.status(500).send('Unauthorized.')
        }

    },
    register: (req, res, next) => {
        let { username, password } = req.body;
        const { session } = req;
        const user = users.find(user => user.username === username && user.password === password);
    }


}