import axios from '../../../axios';

export default (req, res) => {
    const { query } = req;

    return new Promise((resolve) => {
        axios.get(`https://api.spotify.com/v1/tracks/${query.id}`).then(({ status, data }) => {
            res.status(status).send(data);
            resolve();
        });
    });
};
