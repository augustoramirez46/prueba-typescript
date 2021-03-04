import React from 'react';
import { Count } from '../../components/Count/Count';
import { DownloadItem } from '../../components/DownloadItem/DownloadItem';

const initialDownloads = [
    {
        id: 44,
        remoteUrl: 'https://files.readme.io/f37829f-widget-mfa-numeric.pdf',
        localUrl: 'C:/algo',
        date: 3456789097,
    },
    {
        id: 25,
        filename: 'lorem ipsum.txt',
        remoteUrl: 'https://files.readme.io/f37829f-widget-mfa-numeric.png',
        localUrl: 'C:/Users/user/Downloads/FigmaSetup.exe',
        deleted: true,
        date: 3456789097,
    },
    {
        id: 56,
        filename: 'lorem ipsum.jpg',
        remoteUrl: 'https://files.readme.io/f37829f-widget-mfa-numeric.html',
        localUrl: 'C:/Users/user/Downloads/FigmaSetup.exe',
        date: 3456789097,
    }
];



export const App = () => {


    const [downloads, setDownloads] = React.useState(initialDownloads);
    const [count, setCount] = React.useState(0);

    const handleDecrease = () => {
        setCount(count - 1);
    }

    const handleIncrease = () => {
        setCount(count + 1);
    }

    const handleDeleteItem = (id: number) => {

        const index = downloads.findIndex((elem) => {
            return elem.id === id;
        });
        const copy = downloads.slice();
        copy.splice(index, 1);
        setDownloads(copy);

    }

    return (<main>
        <Count count={count} onDecrease={handleDecrease} onIncrease={handleIncrease} />
        <Count count={count} onDecrease={handleDecrease} onIncrease={handleIncrease} />
        <Count count={count} onDecrease={handleDecrease} onIncrease={handleIncrease} />
        {downloads.map(({ filename, remoteUrl, localUrl, deleted, id }) => {
            return <DownloadItem
                key={id}
                name={filename}
                remoteUrl={remoteUrl}
                localUrl={localUrl}
                deleted={deleted}
                onDelete={handleDeleteItem}
                id={id}
            />;
        })}
    </main>);
}
/*
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
*/