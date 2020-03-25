const Database = use("Database");
const { ObjectId } = require("mongodb");
const existsFn = async (data, field, message, args, get) => {
  const value = get(data, field);
  if (!value) {
    return;
  }

  const [table, column] = args;
  const row = await Database.collection(table)
    .where({ _id: ObjectId(value) })
    .findOne();
  if (!row) {
    throw message;
  }
};
module.exports = existsFn;
