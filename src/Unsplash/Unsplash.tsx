class Unsplash {
    private readonly sourceUrl: URL = new URL('https://api.unsplash.com/');
    private readonly searchUrl: URL = new URL('search/photos', this.sourceUrl);
    private readonly headers: Headers = new Headers();

    constructor(searchStr: string) {
        this.headers.append('Authorization', 'Client-ID mOtiJeMhvMA2XEclT0eaApllJTJ7b4Y5kfBfvCMSCUk');
    }

    public search(query: string) {
        const params = new URLSearchParams({
            query: query
        });

        this.searchUrl.search = params.toString();

        const data =  fetch(this.searchUrl.href, {
            headers: this.headers,
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                return data
            });
            return data;
    }

}

export default Unsplash;