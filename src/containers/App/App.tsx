import React from 'react';
import { DownloadItem } from '../../components/DownloadItem/DownloadItem';

export const App = () => {
    return (
        <main>
            <DownloadItem
                name="blender-2.91.2-windows64.msi"
                remoteUrl="htpps://www.blender.com"
                localUrl="C://desktop"
            ></DownloadItem>

            <DownloadItem
                name="MisterHorseProductManagerSetup_1.3.6.exe"
                remoteUrl="htpps://www.blender.com"
                localUrl="C://desktop"
                // se puede declarar el valor del booleano, 
                // pero si no se hace queda en false por defect
                deleted={true}
            />

        </main >
    );
}