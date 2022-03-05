import { MenuItem, Typography } from "@mui/material";

export const PageListItems = ({  page }) => {

    return (
        <>
            <MenuItem>
                <Typography textAlign="center" sx={{ color: 'secondary.main' }}>{page}</Typography>
            </MenuItem>
        </>
    );
}

export default PageListItems;