import Api from "./Api";

class Unsplash implements Api{
    private readonly sourceApiUrl: URL = new URL('https://api.unsplash.com/');
    private readonly searchUrl: URL = new URL('search/photos', this.sourceApiUrl);
    private readonly headers: Headers = new Headers();

    constructor() {
        this.headers.append('Authorization', 'Client-ID mOtiJeMhvMA2XEclT0eaApllJTJ7b4Y5kfBfvCMSCUk');
    }

    public search(query: string, page: number = 1) {
        const params = new URLSearchParams({
            query: query,
            page: page.toString()
        });

        this.searchUrl.search = params.toString();

        const data =  fetch(this.searchUrl.href, {
            headers: this.headers,
        }).then(response => response.json())
            .then(data => {
                return data
            });
            return data;
    }

}

export default Unsplash;