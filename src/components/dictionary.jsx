import React from "react";

function Dictionary(props){
    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                    {props.emoji}
                </span>
                <span>{props.title}</span>
            </dt>
          <dd>
          {props.detail}
          </dd>
        </div>
    )
}

export default Dictionary