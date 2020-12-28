import React, { useState } from 'react';
import questions from './data';
import Question from './Question';
function App() {
  
  console.log(questions)
  return (
        <main>
          <div className="container">
              <h3>Questions And Answers About Login </h3>
            <section className="info">
                  {
                    questions.map(singleQuestion =>{
                      return <Question  {...singleQuestion} />
                      })
                  }
            </section>
          </div>
        </main>
  )
}

export default App;