async function run() {
    const res = await fetch('https://exqmtppdpupkesbqrfic.supabase.co/rest/v1/products?select=*&order=created_at.desc&limit=2', {
        headers: {
            'apikey': 'sb_publishable_sJIZxFReSHq31in0eSATXw_4l8a0oZZ',
            'Authorization': 'Bearer sb_publishable_sJIZxFReSHq31in0eSATXw_4l8a0oZZ'
        }
    });
    const json = await res.json();
    console.log(JSON.stringify(json, null, 2));
}
run();
