import { Children } from 'react';
import {StyledCard} from './style'
import { BsTrash } from "react-icons/bs";

export default function Card({title, status}) {
    const style = { 
        cursor: "pointer",
};
    function plus() {
        console.log("deu certo");
      }
    
    return (
        <StyledCard>
            <h2>{title}</h2>
              <div>
                <p>{status}</p>
                <BsTrash style={style} onClick={() => plus()} />
              </div>
        </StyledCard>
    );
};


