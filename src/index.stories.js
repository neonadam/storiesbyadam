import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

storiesOf('TestComponent', module)
  .add(
    'AnotherTest',
    () => (
      <Button>This is YET ANOTHER TEST 😀 😎 👍 💯</Button>
    ),
    {
      'in-dsm': {
        id: 'YOURCOMPONENTID' 
      } 
    }
  );


  storiesOf('TestComponent', module)
  .add(
    'Badgers',
    () => (
      <Button> BADGER BADGER BADGER 🦡 🦡 🦡 </Button>
    ),
    {
      'in-dsm': {
        id: 'YOURCOMPONENTID' 
      } 
    }
  );
