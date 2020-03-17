import History from './History'

class Invoker {
  constructor() {
    this.history = new History()
  }

  execute(commander) {
    this.history.execute(commander)
  }

  redo() {
    this.history.redo()
  }

  undo() {
    this.history.undo()
  }
}

export default Invoker