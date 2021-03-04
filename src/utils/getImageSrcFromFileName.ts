const baseExtensionsUrl = '/images/file_extensions/'
export const getImageSrcFromFileName = (filename: string = '') => {
    const parts = filename.split('.');
    const extension = parts[parts.length - 1];

    switch (extension) {
        case 'jpg':
        case 'png':
        case 'jpeg':
            return `${baseExtensionsUrl}image.png`
        case 'html':
        case 'pdf':
            return `${baseExtensionsUrl}pdf.png`

        default:
            return `${baseExtensionsUrl}default.png`
    }
    return '';
}