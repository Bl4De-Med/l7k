const { createClient } = require('@supabase/supabase-js');
const SUPABASE_URL = "https://exqmtppdpupkesbqrfic.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_sJIZxFReSHq31in0eSATXw_4l8a0oZZ";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function check() {
    const { data, error } = await supabase.from('products').select('name, images').order('created_at', { ascending: false }).limit(5);
    if (error) console.error(error);
    console.log(JSON.stringify(data, null, 2));
}
check();
