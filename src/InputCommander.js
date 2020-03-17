class InputCommander {
  constructor(dom, value, oldValue) {
    this.dom = dom
    this.value = value
    this.oldValue = oldValue
  }

  execute() {
    this.dom.innerText = this.value
  }

  undo() {
    this.dom.innerText = this.oldValue
  }
}

export default InputCommander