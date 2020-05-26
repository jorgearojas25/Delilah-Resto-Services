const db = require("../../lib/db");
const dbClient = new db().connect();
const model = require("../models/item");

const GetListaItems = async () => {
  return await model(dbClient).findAll();
};

const PostItems = async (dataItem) => {
  const item = model(dbClient).build(dataItem);
  return item.save();
};

const GetItemById = async (id) => {
    return await model(dbClient).findByPk(id);
}

const UpdateItem = async (item) => {
    return await model(dbClient).update(item, {where: {id_item : item.id_item}});
}

const DeleteItem = async (id) => {
    return await model(dbClient).destroy({where: {id_item : id}});
}

module.exports = {
  list: GetListaItems,
  insert: PostItems,
  getOne: GetItemById,
  update: UpdateItem,
  delete: DeleteItem
};
