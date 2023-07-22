export const blobToData = (
  blob: Blob
): Promise<string | ArrayBuffer | null> => {
  const file = new File([blob], "img", { type: blob.type });

  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
};
