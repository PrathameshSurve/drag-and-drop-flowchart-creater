import { BaseNode } from './BaseNode';

export const LoggerNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Logger"
    fields={[
      { type: 'text', label: 'Message', name: 'message', default: 'Log this value' }
    ]}
    handles={[
      { type: 'target', position: 'Left', id: `${id}-input` }
    ]}
  />
);
