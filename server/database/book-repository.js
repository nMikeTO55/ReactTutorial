class BookRepository {
  constructor(connectPool) {
    this.connectPool = connectPool;
  }

  get pool(){
    return this.connectPool.getPool()
  }

  save(book, callback) {
    
    this.connectPool.getPool().query('insert into books set ?', book, callback);  
  }

  get(id) {}

  getAll() {}

  update(id, book, callback) {

    this.pool.query("update books set? where id = ?", [book, id], callback );
  }

  delete() {}
}

module.exports = BookRepository;