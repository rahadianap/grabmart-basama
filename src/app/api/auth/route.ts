const POST = async () => {
    const id = process.env.CLIENT_ID;
    const secret = process.env.CLIENT_SECRET;

    const response = await fetch('https://api.grab.com/grabid/v1/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id: id,
            client_secret: secret,
            grant_type: 'client_credentials',
            scope: 'mart.partner_api',
        }),
    });

    const data = await response.json();

    return Response.json(data);
}

export {POST};