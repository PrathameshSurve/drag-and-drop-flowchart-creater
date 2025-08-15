import { BaseNode } from './BaseNode';

export const APICallNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="API Call"
      description="Makes an API request"
      inputs={[{ id: 'request' }]}
      outputs={[{ id: 'response' }]}
    />
  );
};
