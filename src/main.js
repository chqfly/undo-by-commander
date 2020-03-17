import Invoker from './Invoker'
import InputCommander from './InputCommander'

const gInvoker = new Invoker()

const InputAreaDom = document.getElementById('inputArea')
const BtnListDom = document.getElementsByClassName('btn-list')[0]

BtnListDom.addEventListener('click', function(event) {
  const keyMaps = ['undo', 'redo']
  const eventKey = event.target.dataset.key

  if (!eventKey) {
    return
  }

  if (keyMaps.includes(eventKey)) {
    gInvoker[eventKey]()
    return
  }

  const oldValue = InputAreaDom.innerText
  const curValue = InputAreaDom.innerText + eventKey

  gInvoker.execute(new InputCommander(InputAreaDom, curValue, oldValue))

}, false)