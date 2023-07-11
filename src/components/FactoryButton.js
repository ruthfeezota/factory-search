import React from 'react';
import './FactoryPage.css'
import factory from './TemplateData.json'


function FactoryButton ()  {
    const [visible, setVisible] = React.useState([]);
  
    return (
      <div>
        {factory.map(item => (
          <div key={item.id}>
            <button
              onClick={() => setVisible(visible.includes(item.id)
                ? visible.filter(vId => vId !== item.id)
                : [...visible, item.id])}
            >
              {visible.includes(item.id) ? 'Hide' : 'Show'}
            </button>
            {visible.includes(item.id) && <div>{item.title}</div>}
          </div>
        ))}
      </div>
    );
  }
  
  
  export default FactoryButton;