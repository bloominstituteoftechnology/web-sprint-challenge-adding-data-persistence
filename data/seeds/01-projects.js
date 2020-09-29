exports.seed = function(knex) {
    return knex("projects").insert([
        {
          id: 1,
          project_name: "Naan",
          project_desc: "Naan is a leavened, oven-baked flatbread.",
          completed: false
        },
        {
            id: 2,
            project_name: "Gyudon",
            project_desc: "Gyūdon is a Japanese dish consisting of a bowl of rice topped with beef and onion simmered in a mildly sweet sauce.",
            completed: false
        },
        {
            id: 3,
            project_name: "Pierogi",
            project_desc: "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water.",
            completed: false
        }
    ]);
  };
  