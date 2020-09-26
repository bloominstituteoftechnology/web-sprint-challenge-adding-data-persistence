exports.seed = function(knex) {
    return knex("projects").insert([
        {
          id: 1,
          project_name: "Naan",
          project_desc: "Naan is a leavened, oven-baked flatbread found in the cuisines mainly of Western Asia, South Asia, Indonesia, Myanmar and the Caribbean.",
          completed: false
        },
        {
            id: 2,
            project_name: "Gyudon",
            project_desc: "Gyūdon is a Japanese dish consisting of a bowl of rice topped with beef and onion simmered in a mildly sweet sauce flavored with dashi, soy sauce and mirin.",
            completed: false
        },
        {
            id: 3,
            project_name: "Pierogi",
            project_desc: "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water. Pierogi are often associated with Central and Eastern European nations, where they are considered national dishes.",
            completed: false
        }
    ]);
  };
  