import { useState, useEffect, useRef } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);
  const { setEdges } = useReactFlow();

  // Detect variables and remove invalid edges
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)].map((m) => m[1]);
    const uniqueVars = [...new Set(matches)];

    setVariables(uniqueVars);

    // Remove edges for deleted variables
    setEdges((eds) =>
      eds.filter((edge) => {
        const sourceHandle = edge.sourceHandle || '';
        const targetHandle = edge.targetHandle || '';
        return (
          (edge.source !== id || uniqueVars.some(v => sourceHandle.endsWith(v))) &&
          (edge.target !== id || uniqueVars.some(v => targetHandle.endsWith(v)))
        );
      })
    );
  }, [currText, id, setEdges]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.width = '150px';

      const maxHeight = 300;
      textareaRef.current.style.height =
        Math.min(maxHeight, textareaRef.current.scrollHeight) + 'px';

      const minWidth = 150;
      const maxWidth = 400;
      const charBasedWidth = currText.length * 8;
      textareaRef.current.style.width =
        Math.min(maxWidth, Math.max(minWidth, Math.max(charBasedWidth, textareaRef.current.scrollWidth))) + 'px';
    }
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Text"
      outputs={[{ id: 'output' }]}
      children={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {variables.map((variable, idx) => (
            <Handle
              key={variable}
              type="target"
              position={Position.Left}
              id={`${id}-${variable}`}
              style={{
                top: 45 + idx * 28,
                background: 'orange',
                border: '1px solid #cc8400',
                width: '10px',
                height: '10px'
              }}
            />
          ))}

          <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
            Text:
            <textarea
              ref={textareaRef}
              value={currText}
              placeholder='{{input here}}'
              onChange={(e) => setCurrText(e.target.value)}
              style={{
                resize: 'none',
                overflow: 'auto',
                fontSize: '0.9rem',
                padding: '4px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                minHeight: '40px',
                minWidth: '150px',
                maxHeight: '300px'
              }}
            />
          </label>
        </div>
      }
    />
  );
};
