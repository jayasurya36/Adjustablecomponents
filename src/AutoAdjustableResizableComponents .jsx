import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const ResizableComponent = ({ width, height, onResize, onDrag, children }) => (
  <ResizableBox
    width={width}
    height={height}
    onResize={onResize}
    onResizeStop={onResize}
    draggableOpts={{ grid: [25, 25] }}
  >
    <div style={{ border: '1px solid #ddd', padding: '10px', background: '#f0f0f0' }}>
      {children}
    </div>
  </ResizableBox>
);

const AutoAdjustableResizableComponents = () => {
  const [components, setComponents] = useState([
    { id: 1, width: 200, height: 200 },
    { id: 2, width: 300, height: 300 },
    { id: 3, width: 250, height: 250 },
  ]);

  const handleResize = (index, event, { size }) => {
    const updatedComponents = [...components];
    updatedComponents[index] = { ...updatedComponents[index], ...size };
    setComponents(updatedComponents);
  };

  return (
    <div style={{display: "flex", flexWrap:"wrap", margin: "2rem"}}>
      <h1>Auto-Adjustable Resizable Components</h1>
      {components.map((component, index) => (
        <ResizableComponent
          key={component.id}
          width={component.width}
          height={component.height}
          onResize={(e, data) => handleResize(index, e, data)}
        >
          <div>
            <h2>Resizable Component {component.id}</h2>
            <p>Try dragging and resizing this box!</p>
          </div>
        </ResizableComponent>
      ))}
    </div>
  );
};

export default AutoAdjustableResizableComponents;