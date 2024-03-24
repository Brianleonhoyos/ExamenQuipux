class Http {

    static instance = new Http();
    baseUrl = 'http://localhost:8080/api';

    get = async (url: string) => {

        try {
            let request = await fetch(this.baseUrl + url, {
                method: 'GET',
            });
            let json = request.json();

            return json;

        } catch (error: any) {
            console.log('Error', error);
            throw Error(error);
        }

    }

    post = async (url: string, body: any) => {
        try {
            let request = await fetch(this.baseUrl + url, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body
            });

            let json = request.json();

            return json;

        } catch (error: any) {
            console.log('Error', error);
            throw Error(error);
        }
    }

    get2 = async (url: string, body: any = null) => {
        try {
            let request = await fetch(this.baseUrl + url, {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
                body
            });

            let json = request.json();

            return json;

        } catch (error: any) {
            console.log('Error', error);
            throw Error(error);
        }
    }

}


export { Http };