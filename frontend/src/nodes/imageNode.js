import { BaseNode } from './BaseNode';

export const ImageNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Image"
      description="Processes an image"
      inputs={[{ id: 'image' }]}
      outputs={[{ id: 'processedImage' }]}
    />
  );
};
