import React from 'react'

const DashCard = ({item, onclick}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly', width:'100%'}}>
        <img src={item.thumbnail} style={{width:'100px'}} alt="" />
        <p>{item.title}</p>
        <button style={{width:'150px'}} onClick={onclick}>Sil</button>
    </div>
  )
}

export default DashCard