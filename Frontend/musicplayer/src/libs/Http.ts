class Http {

    static instance = new Http();
    baseUrl = 'http://127.0.0.1:8080/';

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

    put = async (url: string, body: any = null) => {
        try {
            let request = await fetch(this.baseUrl + url, {
                method: 'PUT',
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

    delete = async (url: string) => {
        try {
            let request = await fetch(this.baseUrl + url, {
                method: 'DELETE',
            });

            let json = await request.json();

            return json;
        } catch (error: any) {
            console.log('Error', error);
            throw Error(error);
        }
    };

}


export { Http };