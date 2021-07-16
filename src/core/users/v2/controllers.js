class Controller {
  users() {
    return this.usersMok()
  }

  user(req) {
    const { params: { id } } = req
    return this.usersMok().find(u => u.id === parseInt(id))
    // return req
  }

  create() {
    return 'created'
  }

  update() {
    return 'updated'
  }

  delete() {
    return 'deleted'
  }

  usersMok() {
    return [
      { id: 1, name: 'Viacheslav', email: 'viacheslav@email.com' },
      { id: 2, name: 'Sofia', email: 'Sofia@email.com' },
      { id: 3, name: 'Oksana', email: 'Oksana@email.com' },
    ]
  }
}

export { Controller }