interface Attribute {
    multiple?: boolean;
    accept?: string;
}
export declare function pickFile<T>(params: Attribute): Promise<T>;
export default pickFile;
