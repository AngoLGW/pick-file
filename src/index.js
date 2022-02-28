function pickFile() {
  return new Promise((resolve, reject) => {
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    multiple && input.setAttribute("multiple", true);
    accept && input.setAttribute("accept", accept);
    input.click();
    input.addEventListener("change", listener);

    function listener(e) {
      console.log(e);
      if (multiple) {
        let files = e.path[0].files;
        files = Array.from(files);
        resolve(
          files.map((file) => {
            return {
              file,
              property: {
                name: file.name,
                size: file.size,
                type: file.type,
              },
            };
          })
        );
      } else {
        let file = e.path[0].files[0];
        resolve({
          file,
          property: {
            name: file.name,
            size: file.size,
            type: file.type,
          },
        });
      }

      input.removeEventListener("change", listener);
      input = null;
    }
  });
}
