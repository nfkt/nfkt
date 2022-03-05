import React from "react";
import LoginView from "./ProfileView";

export function LoginContainer() {
    const pages = ['Profile', 'Projects'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


return (
    <div>
        <LoginView title="Profile" pages={pages} settings={settings} />
    </div>
);
};
