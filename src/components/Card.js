import React from "react";

const Card = ({name, email, id}) => {
return(
    <div className=" tc bg-light-blue dib ma2 pa3 br3 shadow-5 bw2 grow">
        <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>

    </div>
);
}
export default Card;