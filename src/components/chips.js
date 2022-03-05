import { Chip } from "@mui/material"



export const Chips = ({chips})=>{


    return(
        <>
        {
            chips.map((chip, i)=>
                <Chip
                label={chip}
                sx={{
                  backgroundColor: "turquoise",
                  fontSize: "larger",
                  color: "lightslategray",
                  fontWeight: "bold",
                }}
              />
            )
        }
        </>
    )
}