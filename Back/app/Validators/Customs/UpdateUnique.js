const Database = use("Database");
const { ObjectId } = require("mongodb");
const uniqueCustom = async (data, field, message, args, get) => {
  const value = get(data, field);
  if (!value) {
    return;
  }
  const [table, column, id] = args;
  let row = "";
  if (id === "false") {
    row = await Database.collection(table)
      .where({ [column]: value })
      .findOne();
    if (row) {
      throw message;
    }
  } else {
    row = await Database.collection(table)
      .where({ _id: ObjectId(id), [column]: value })
      .findOne();
    if (!row) {
      row = await Database.collection(table)
        .where({ [column]: value })
        .findOne();
      if (row) {
        throw message;
      }
    }
  }
};
module.exports = uniqueCustom;
