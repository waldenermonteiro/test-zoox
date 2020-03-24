"use strict";
/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Model = use('Model')

class State extends Model {
  // static boot() {
  //   super.boot();

  //   this.addTrait("@provider:Lucid/SoftDeletes");
  // }
  // static get dates() {
  //   return super.dates.concat(["deleted_at"]);
  // }
}

module.exports = State;
