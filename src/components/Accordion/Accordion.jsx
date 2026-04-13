import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

const Accordion = () => {
    const data = [{
        id: 1,
        question: 'What is React?',
        answer: 'React is a JavaScript framework',
    },
    {
        id:2,
        question: 'Why do we use react?',
        answer: 'React is mainly known of its virtual DOM which helps in easy rerenders',
    },
    {
        id:3,
        question: 'Which is better react or angular',
        answer: 'React is better in my case.'
    }
]
  return (
    <div>
        {
            data.map((item)=> <AccordionItem key={item.id} question={item.question} answer={item.answer}/>)
        }
    </div>
  )
}

export default Accordion