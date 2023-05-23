import './App.css';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';
import schema from './schema.json';
import React, { useState, useEffect } from "react";

const log = (type) => console.log.bind(console, type);


function App() {
    var path = window.location.pathname === "/" ? "/api" : window.location.pathname;

    return (
        <Navagation
            path={path}
        />
    );
}

function Navagation( { path } ) {
  const [ data, setData ] = useState({});

  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.meta);
      });
  }, [path]);

  return (
    <div>
      <ul>
        {
            Object.keys(data).map(
                (k) => (
                    <li key={k}>
                      <a href={data[k]}>{k}</a>
                    </li>
                )
            )
        }
      </ul>
    </div>
  );
}

function FormApp() {
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
