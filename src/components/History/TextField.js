import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function MinHeightTextarea(props) {

  const { text, setText, readOnly } = props;


  const handleChange = (event) => {

      var value = event.target.value 
      console.log(`****  Text  handleChange  value:  ${ value }`);

      setText(value);
  }


  return <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Ingresa lo que quieras comentar" value={text} onChange={ handleChange }
              style={{width: "70%", marginTop: "30px", height: "105px", marginBottom: "15px"}} name="input" disabled={readOnly}
          />;
}
