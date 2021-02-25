import React from 'react';
import { getImageSrcFromFileName } from '../../utils/getImageSrcFromFileName';
import './DownloadItem.css';


// aqui pide las variables que se requieren para usar este componente
interface DownloadItemProps {
    name: string;
    remoteUrl: string;
    localUrl: string;
    deleted?: boolean;

}

// en lugar de poner = (props) =>, se desglosan las variables asi:
export const DownloadItem: React.FC<DownloadItemProps> = ({ name, remoteUrl, localUrl, deleted }) => {

    const imageSrc = getImageSrcFromFileName(name);
    return (<div
        className={`DownloadItem 
        ${deleted ? 'DownloadItem--deleted' : ''}`} >

        <img src={imageSrc} alt="" />
        <h1>{name || 'Untitled'}{deleted && " Deleted"}</h1>
        <p>{remoteUrl}</p>
        {!deleted && <button>Show in Folder</button>}

    </div>);
}