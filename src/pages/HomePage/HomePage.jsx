import React from 'react';
import DocumentTitle from '../../components/DocumentTitle'; 
import css from './HomePage.module.css'; 

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>
         Welcome to the Phonebook {' '}
          <span role="img" aria-label="Greeting icon">
            📱
          </span>
        </h1>
      </div>
    </>
  );
}
