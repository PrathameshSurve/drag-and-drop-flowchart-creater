// frontend/src/nodes/inputNode.js
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Input"
    fields={[
      { type: 'text', label: 'Name', name: 'inputName', default: id.replace('customInput-', 'input_') },
      { type: 'select', label: 'Type', name: 'inputType', default: 'Text', options: ['Text', 'File'] }
    ]}
    handles={[
      { type: 'source', position: 'Right', id: `${id}-value` }
    ]}
  />
);
