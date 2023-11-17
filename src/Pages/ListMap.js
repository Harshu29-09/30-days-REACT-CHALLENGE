import React from 'react'

function ListMap() {
    let Name =["Honey","Singh","yoyo","king"]
    let result=Name.map((singer)=><h3>{singer}</h3>)
  return (
    <>
    <h3>{result}</h3>

    </>
  )
}

export default ListMap