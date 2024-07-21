const downloadPdf = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.click();
};

export { downloadPdf };
