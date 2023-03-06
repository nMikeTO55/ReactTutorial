'use strict';

const mysql = require('mysql');
const db = require('../config/db');

const connectPool = {
  
  pool:null,

  init: function(){
    this.pool = mysql.createPool(db);
  },

  getPool: function(){
    return this.pool;
  }
}
module.exports = connectPool;