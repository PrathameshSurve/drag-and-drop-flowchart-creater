// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px', display: 'flex', justifyContent: 'center', background: 'white', boxShadow: '0 .2rem 2.5rem 0 rgba(54, 66, 117, .12)' }} className='toolbar'>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                {/* New 7 nodes */}
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='image' label='Image' />
                <DraggableNode type='apiCall' label='API Call' />
                <DraggableNode type='condition' label='Condition' />
                <DraggableNode type='logger' label='Logger' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='merge' label='Merge' />

            </div>
        </div>
    );
};
