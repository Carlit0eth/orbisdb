import { createClient } from "@supabase/supabase-js";

/**
 * DB implementation to index streams in Supabase
 */
export default class Supabase {
  constructor(url, key) {
    console.log("Initializing Supabase DB with url:", url);
    //this.supabase = createClient(url, key);
  }

  // Save the content in the database
  async save(model, content, pluginsData) {
    /** Generate variables to insert */
    let variables = {
      ...content,
      pluginsData,
    };
    console.log("Saving in DB::", variables);

    /** The database would have one table per model indexed, those tables would be created when the project is initialized in the UI */
    try {
      //let { data, error, status } = await this.supabase.from(model).upsert(variables);
    } catch (e) {
      console.log("Error saving stream in database:", e);
    }
  }
}
