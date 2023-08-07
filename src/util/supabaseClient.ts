import {createClient} from "@supabase/supabase-js";


function getClient(){
    return createClient(
        process.env.REACT_APP_SUPABASE_URL as string,
        process.env.REACT_APP_SUPABASE_ANON_KEY as string
    );
}

export const client = getClient();
