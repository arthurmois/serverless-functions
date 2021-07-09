const fetch = require('node-fetch');

exports.hasuraRequest = async function({query,variables }) {
    const result = await fetch(process.env.HASURA_URL, {
    // const result = await fetch("https://serverless-egghead-arthur.hasura.app/v1/graphql", {
        method: 'POST',
        headers: {
            'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET,
        },
        body: JSON.stringify({query,variables }),
    }).then((res) => res.json());

    if(!result || !result.data) {
        console.error(result);
        return [];
    }

    return result.data;
};