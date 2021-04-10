class baseRepository {
    constructor() {
      this.model = this.getModel();
    }
  
    getModel() {
      throw new Error('You have to implement the method getModel!');
    }
  
    find() {
      return this.model.query();
    }
  
    findById(id) {
      return this.model.query().findById(id);
    }
  
    findOne(conditions = {}) {
      return this.model.query().findOne(conditions);
    }
  
    insert(data = {}) {
      return this.model.query().insert(data);
    }
  
    update(data = {}) {
      return this.model.query().update(data);
    }
  
    deleteById(id) {
      return this.model.query().deleteById(id);
    }
  
    delete() {
      return this.model.query().delete();
    }
  
    query() {
      return this.model.query();
    }
  
    relatedQuery(){
      return this.model.relatedQuery();
    }
  }
  
  module.exports = baseRepository;
  