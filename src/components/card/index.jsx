import { StyledCard } from "./style";
import { BsTrash } from "react-icons/bs";

export default function Card({ title, status, remove, id }) {
    const style = {
      cursor: "pointer",
    };

  return (
    <StyledCard>
        <h2>{title}</h2>
        
        <div>
            <p>{status}</p>
            <BsTrash onClick={()=> remove(title)} style={id}/>
        </div>
    </StyledCard>
  );
}
