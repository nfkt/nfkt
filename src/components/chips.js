import { Chip } from "@mui/material"



export const Chips = ({chips})=>{


    return(
        <>
        {
            chips.map((chip, i)=>
                <Chip
                label={chip}
                sx={{
                  backgroundColor: "primary.main",
                  fontSize: "larger",
                  color: "secondary.main",
                  fontWeight: "bold",
                  mr:1
                }}
              />
            )
        }
        </>
    )
}