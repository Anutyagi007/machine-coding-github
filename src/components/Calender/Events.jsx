import React from 'react'

const Events = () => {
const data =[
  {
    "id": 1,
    "title": "Morning Meeting",
    "start": "09:00:00",
    "end": "10:00:00"
  },
  {
    "id": 2,
    "title": "Lunch Break",
    "start": "12:00:00",
    "end": "13:00:00"
  },
  {
    "id": 4,
    "title": "Team Sync",
    "start": "10:30:00",
    "end": "11:30:00"
  },
  {
    "id": 5,
    "title": "Client Call",
    "start": "14:00:00",
    "end": "15:00:00"
  },
  {
    "id": 6,
    "title": "Evening Review",
    "start": "16:00:00",
    "end": "17:00:00"
  },
  {
    "id": 7,
    "title": "Project Discussion",
    "start": "19:00:00",
    "end": "20:00:00"
  }
]
  return (
    <div>
        {
            data.map((event)=> {
                const startHour = event.start.split(':')[0];
                const startMin = event.start.split(':')[1];
                const endHour = event.end.split(':')[0];
                const endMin = event.end.split(':')[1];
                const top = startHour*5 + (startMin/60)*5;
                const height = (endHour - startHour)*5 + ((endMin - startMin)/60) * 5;
                return <div className='event' style={{top: `${top}rem`, height: `${height}rem`}}>
                    {event.title}
                </div>
            })
        }
    </div>
  )
}

export default Events