import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  description,
  inputs = [],
  outputs = [],
  children,
  style = {}
}) => {
  return (
    <div style={{ width: 200, minHeight: 80, border: '1px solid black', padding: '4px', ...style }} className='nodeBox'>
      {/* Handles for inputs */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: input.top || `${(index + 1) * (100 / (inputs.length + 1))}%` }}
        />
      ))}

      {/* Node Title */}
      <div style={{ fontWeight: 'bold' }}>{title}</div>

      {/* Optional description */}
      {description && <div style={{ fontSize: '0.8em' }}>{description}</div>}

      {/* Custom children (fields, etc.) */}
      <div style={{ marginTop: '6px' }}>{children}</div>

      {/* Handles for outputs */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: output.top || `${(index + 1) * (100 / (outputs.length + 1))}%` }}
        />
      ))}
    </div>
  );
};
