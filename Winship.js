class Winship {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async sendRequest(endpoint, method, data = null) {
        const url = this.baseUrl + endpoint;
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: ["POST", "PUT", "PATCH"].includes(method) ? JSON.stringify(data) : null
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
