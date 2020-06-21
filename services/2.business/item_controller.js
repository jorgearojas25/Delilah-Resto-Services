const itemStore = require('../3.store/item_store');
const GetListaItems = () => {
    return new Promise((resolve, reject) => {
        resolve(itemStore.list());
    })
}

const PostItem = (req, res) => {
    return new Promise((resolve, reject) => {
        resolve(itemStore.insert(req.body))
    });
}

const UpdateItem = (req, res) => {
    return new Promise((resolve, reject) => {
        resolve(itemStore.update(req.body));
    })
}

const DeleteItem = (req, res) => {
    return new Promise((resolve, reject) => {
        resolve(itemStore.delete(req.params.id));
    })
}

module.exports = {
    GetListaItems,
    PostItem,
    UpdateItem,
    DeleteItem
}