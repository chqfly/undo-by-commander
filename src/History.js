class History {
  constructor() {
    this.redos = []
    this.undos = []
  }

  execute(commander) {
    this.undos.push(commander)
    commander.execute()
    this.redos = []
  }

  undo() {
    if (!this.undos.length) {
      return
    }

    const commander = this.undos.pop()
    if (commander) {
      commander.undo()
      this.redos.push(commander)
    }
  }

  redo() {
    if (!this.redos.length) {
      return
    }
    
    const commander = this.redos.pop()
    if (commander) {
      this.undos.push(commander)
      commander.execute()
    }
  }
}

export default History