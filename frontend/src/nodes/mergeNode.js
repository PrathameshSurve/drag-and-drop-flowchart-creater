import { BaseNode } from './BaseNode';

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Merge"
      description="Merges multiple inputs"
      inputs={[{ id: 'input1' }, { id: 'input2' }]}
      outputs={[{ id: 'merged' }]}
    />
  );
};
