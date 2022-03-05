import React from "react";
import HomeView from "./HomeView";

export function HomeContainer() {
    const pages = ['Profile', 'Projects'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


return (
    <div>
        <HomeView title="Home" pages={pages} settings={settings} />
    </div>
);
};
