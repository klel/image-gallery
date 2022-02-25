import ImageSummary from './model/ImageSummary';
import Result from './model/Result';

interface Api {
    search(query: string):Promise<Result>
    search(query: string, page: number):Promise<Result>
}

export default Api;