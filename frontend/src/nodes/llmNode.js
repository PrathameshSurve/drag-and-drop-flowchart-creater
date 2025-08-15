// LLMNode.js
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      description="This is a LLM."
      inputs={[
        { id: 'system', top: '33%' },
        { id: 'prompt', top: '66%' }
      ]}
      outputs={[
        { id: 'response' }
      ]}
    />
  );
};
