function pickFile(params = {}) {
  let { multiple, accept, minNum, maxNum, maxSize } = params;

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
        if (minNum && files.length < minNum) {
          reject(`选择文件数量不能小于${minNum}`);
        }
        if (maxNum && files.length > maxNum) {
          reject(`选择文件数量不能大于${maxNum}`);
        }
        if (maxSize) {
          let totle = files.reduce((pre, cur) => {
            return pre + cur.size;
          }, 0);
          //最大文件大小默认传入单位为KB
          if (maxSize * 1000 < totle) {
            reject(`选择文件总大小不能大于 ${maxSize} KB`);
          }
        }
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
        //最大文件大小默认传入单位为KB
        if (maxSize && maxSize * 1000 < file.size) {
          reject(`选择文件大小不能大于 ${maxSize} KB`);
        }
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
