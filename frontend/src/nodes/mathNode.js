import { BaseNode } from './BaseNode';

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Math"
      description="Performs math operations"
      inputs={[{ id: 'a' }, { id: 'b' }]}
      outputs={[{ id: 'result' }]}
    />
  );
};
