import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button type="submit" class="btn btn-default signinbtn">{props.btn_name}</button>
        </div>
    )
}
