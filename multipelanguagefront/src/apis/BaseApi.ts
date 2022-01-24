import httpCodeStatuse from './utilitys/httpCodeStatus';

const Get = (url: string, headers: HeadersInit) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "get",
            mode: "cors",
            headers: headers,
        })
            .then((response) => {
                if (response.status != httpCodeStatuse.HttpSuccessCode) {
                    throw new Error(response.status.toString());
                }
                resolve(response.json());
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const Put = (url: string, headers: HeadersInit, body: BodyInit) => {
    return new Promise((resolve, reject) => {
        fetch(url,
            {
                method: 'put',
                mode: 'cors',
                headers: headers,
                body: JSON.stringify(body)
            }).then(response => {
                if (response.status !== httpCodeStatuse.HttpSuccessCode) {
                    throw new Error(response.status.toString());
                }
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
    });
};

export { Get, Put };
