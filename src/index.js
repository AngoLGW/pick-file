function pickFile(params = {}) {
  let { multiple, accept } = params;
  return new Promise((resolve, reject) => {
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    multiple && input.setAttribute("multiple", true);
    accept && input.setAttribute("accept", accept);
    input.click();
    input.addEventListener("change", listener);

    function listener(e) {
      console.log(e);
      let files = e.path[0].files;
      files = Array.from(files);
      resolve(files);

      input.removeEventListener("change", listener);
      input = null;
    }
  });
}
