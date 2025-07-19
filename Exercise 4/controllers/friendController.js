const friends = require("../models/friends");

const getAllFriends = (req, res) => {
    res.json(friends);
};

const filterFriends = (req, res) => {
    const { gender, letter } = req.query;
    let filtered = [...friends];

    if (gender) {
        filtered = filtered.filter(
            (friend) => friend.gender.toLowerCase() === gender.toLowerCase()
        );
    }

    if (letter) {
        filtered = filtered.filter((friend) => friend.name.startsWith(letter));
    }

    if (filtered.length > 0) {
        res.status(200).json(filtered);
    } else {
        res.status(404).json({ error: "No friends matching filters." });
    }
};

const getInfo = (req, res) => {
    const { "user-agent": userAgent, "content-type": contentType, accept } = req.headers;
    res.json({ "user-agent": userAgent, "content-type": contentType, accept });
};

const getFriendById = (req, res) => {
    const friendId = parseInt(req.params.id);
    const friend = friends.find((f) => f.id === friendId);

    if (!friend) {
        return res.status(404).json({ error: `Friend with ID ${friendId} not found.` });
    }

    res.json(friend);
};

const addFriend = (req, res) => {
    const newFriend = req.body;

    if (!newFriend.name || !newFriend.gender) {
        return res.status(400).json({ error: "Friend object must contain a name and gender." });
    }

    newFriend.id = newFriend.id || friends.length + 1;
    friends.push(newFriend);

    res.status(200).json(newFriend);
};

const updateFriend = (req, res) => {
    const friendId = parseInt(req.params.id);
    const index = friends.findIndex((f) => f.id === friendId);

    if (index === -1) {
        return res.status(404).json({ error: `Friend with ID ${friendId} not found.` });
    }

    const updatedFriend = req.body;

    if (!updatedFriend.name || !updatedFriend.gender) {
        return res.status(400).json({ error: "Updated friend must contain name and gender." });
    }

    friends[index] = { id: friendId, ...updatedFriend };
    res.status(200).json(friends[index]);
};

module.exports = {
    getAllFriends,
    filterFriends,
    getInfo,
    getFriendById,
    addFriend,
    updateFriend,
};
