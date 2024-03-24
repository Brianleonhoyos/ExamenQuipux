class Http {

    static instance = new Http();
    baseUrl = 'http://127.0.0.1:8000/api/';

    get = async (url, token = null) => {

        try {
            let request = await fetch(this.baseUrl + url, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            });
            let json = request.json();

            return json;

        } catch (error) {
            console.log('Error', error);
            throw Error(error);
        }

    }

    post = async (url, body, token = null) => {
        try {
            let request = await fetch(this.baseUrl + url, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
                body
            });

            let json = request.json();

            return json;

        } catch (error) {
            console.log('Error', error);
            throw Error(error);
        }
    }

}


export { Http };