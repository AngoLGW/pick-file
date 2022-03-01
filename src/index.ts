interface Attribute {
  multiple?: boolean;
  accept?: string;
}

export function pickFile<T>(params: Attribute = {}): Promise<T> {
  let { multiple, accept } = params;

  return new Promise((resolve, reject) => {
    let input: HTMLInputElement = document.createElement("input");
    input.setAttribute("type", "file");
    multiple && input.setAttribute("multiple", "true");
    accept && input.setAttribute("accept", accept);
    input.click();
    input.addEventListener("change", listener);

    function listener(e: any) {
      console.log(e);
      let files = e.path[0].files;
      files = Array.from(files);
      resolve(files);

      input.removeEventListener("change", listener);
      input = null as unknown as HTMLInputElement;
    }
  });
}

export default pickFile;
