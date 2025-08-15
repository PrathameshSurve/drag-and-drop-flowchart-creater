import { BaseNode } from './BaseNode';

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Filter"
      description="Filters incoming data"
      inputs={[{ id: 'data' }]}
      outputs={[{ id: 'filtered' }]}
    />
  );
};
