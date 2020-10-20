import Editor from './editor'
import Renderer from './renderer'
import Controls from './components/controls'

if (window !== undefined) {
  window.FormeoEditor = Editor
  window.FormeoRenderer = Renderer
}

export const FormeoEditor = Editor
export const FormeoRenderer = Renderer
export const FormeoControls = Controls

export default { FormeoEditor, FormeoRenderer, FormeoControls }
