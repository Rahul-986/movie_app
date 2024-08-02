import React from 'react'

const DropDown = ({title,option}) => {
  return (
    <>
    <div className='select'>
        <select defaultValue="0" name="format" id="format">
          <option value="0" disabled>
            {title}
          </option>
          {option.map((o, i) => (
           <option value={o} >
           {o.toUpperCase()}
          </option>
          ))}
        </select>
       </div>

    </>
  )
}


export default DropDown
