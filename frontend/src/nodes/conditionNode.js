import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Condition"
    fields={[
      { type: 'text', label: 'Condition', name: 'condition', default: 'x > 0' }
    ]}
    handles={[
      { type: 'target', position: 'Left', id: `${id}-input` },
      { type: 'source', position: 'Right', id: `${id}-true` },
      { type: 'source', position: 'Right', id: `${id}-false` }
    ]}
    inputs={[{ id: 'input1' }, { id: 'input2' }]}
    outputs={[{ id: 'output 1' }, { id: 'output 1' }]}
  />
);
