import { MenuItem, Typography } from "@mui/material";

export const SettingsListItems = ({ handleCloseUserMenu, settings }) => {

    return (
        <>

            {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
            ))}
        </>
    );
}

export default SettingsListItems;