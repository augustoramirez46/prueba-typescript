import React from 'react';
import { getImageSrcFromFileName } from '../../utils/getImageSrcFromFileName';
import './DownloadItem.css';


// aqui pide las variables que se requieren para usar este componente
interface DownloadItemProps {
    name?: string;
    remoteUrl: string;
    localUrl: string;
    deleted?: boolean;
    onDelete: (id: number) => void;
    id: number;

}

// en lugar de poner = (props) =>, se desglosan las variables asi:
export const DownloadItem: React.FC<DownloadItemProps> = ({ name, remoteUrl, localUrl, deleted, onDelete, id }) => {


    const imageSrc = getImageSrcFromFileName(name);
    console.log(imageSrc);

    const handleClickDeleteMe = () => {
        onDelete(id)
    }

    return (<div
        className={`DownloadItem 
        ${deleted ? 'DownloadItem--deleted' : ''}`} >

        <img src={imageSrc} alt="" />
        <h1>{name || 'Untitled'}{deleted && " Deleted"}</h1>
        <p>{remoteUrl}</p>
        {!deleted && <button>Show in Folder</button>}
        <button onClick={handleClickDeleteMe}>Delete File</button>

    </div>);
}