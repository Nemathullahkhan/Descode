export async function convertBlobUrlToFile(blobUrl: string) {
    const response = await fetch(blobUrl); // How would this look like? This looks like a promise
    const blob = await response.blob();
    const fileName = Math.random().toString(36).substring(2, 9);
    const mimeType = blob.type || "application/octet-stream"; // what's this? mimeType is a string
    const file = new File([blob], `${fileName}.${mimeType.split("/")[1]}`,{ 
        type: mimeType,
    } );
    return file;
}