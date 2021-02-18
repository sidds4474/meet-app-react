import React from 'react'
import MeetListItem from './MeetListItem'

export default function MeetList(props){
  return(
    <div>
        {props.meets.map(meet =>(
           <MeetListItem  meet={meet} key={meet.id}/>
        ) )}
    </div>
   
  )

}