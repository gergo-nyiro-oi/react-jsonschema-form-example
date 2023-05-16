import './App.css';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';
import schema from './schema.json';

const log = (type) => console.log.bind(console, type);

function App() {
    return (
      <Form
        schema={schema}
        validator={validator}
        onChange={log('changed')}
        onSubmit={log('submitted')}
        onError={log('errors')}
      />
    );
}

export default App;
