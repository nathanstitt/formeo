import ComponentData from '../component-data'
import Column from './column'

const DEFAULT_CONFIG = {
  actionButtons: {
    buttons: ['handle', 'edit', 'clone', 'remove'],
    disabled: [],
  },
}

export class Columns extends ComponentData {
  constructor(columnData) {
    super('columns', columnData)
    this.config = { all: DEFAULT_CONFIG }
  }
  Component(data) {
    return new Column(data)
  }
}

const columns = new Columns()

export default columns
