import { type } from "os";

class ImageSummary {
    private _id: string;
    public get id() : string {
        return this._id;
    }
    public set id(v : string) {
        this._id = v;
    }

    urls: urlList;

    alt_description: string;
    
}

type urlList = {
    full: string;
    regular: string;
}

export default ImageSummary;