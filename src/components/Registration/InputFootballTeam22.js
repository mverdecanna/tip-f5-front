/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions
} from "@material-ui/lab/Autocomplete";

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {

  // const options5 = top100Films.map(option => {
  //   const firstLetter = option.title[0].toUpperCase();
  //   return {
  //     firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
  //     ...option
  //   };
  // });


  const options = teams.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: option.worldChampion ? 'Campeones del Mundo' : 'Otros equipos', //firstLetter,
      ...option,
    };
  });


  const [value, setValue] = React.useState(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            title: newValue
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== "") {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={option => option.firstLetter}
      getOptionLabel={option => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={option => option.title}
      style={{ width: 300 }}
      freeSolo
      renderInput={params => (
        <TextField
          {...params}
          label="Selecciona o ingresa tu equipo"
          variant="outlined"
        />
      )}
    />
  );
}

const worldChampionTeams = [
    "Estudiantes de la Plata",
    "Racing",
    "Independiente",
    "Boca",
    "River",
    "Velez",
];

const teams = [
    { worldChampion: true, name: "Estudiantes de la Plata" },
    { worldChampion: true, name: "Racing" },
    { worldChampion: true, name: "Independiente" },
    { worldChampion: true, name: "Boca" },
    { worldChampion: true, name: "River" },
    { worldChampion: true, name: "Velez" },
    { worldChampion: false, name: "San Lorenzo" },
    { worldChampion: false, name: "Argentinos Jrs" },
    { worldChampion: false, name: "Newell's" },
    { worldChampion: false, name: "Rosario Central" },
    { worldChampion: false, name: "Huracan" },
    { worldChampion: false, name: "Arsenal" },
    { worldChampion: false, name: "Lanus" },
    { worldChampion: false, name: "Banfield" },
    { worldChampion: false, name: "Quilmes" },
    { worldChampion: false, name: "Ferro" },
    { worldChampion: false, name: "Chacarita" },
    { worldChampion: false, name: "Colon de Santa Fé" },
    { worldChampion: false, name: "Belgrano de Córdoba" },
    { worldChampion: false, name: "Instituto de Córdoba" },
    { worldChampion: false, name: "Talleres de Córdoba" },
    { worldChampion: false, name: "Unión de Santa Fé" },
    { worldChampion: false, name: "Gimnasia y Esgrima" },
    { worldChampion: false, name: "Argentino de Quilmes" },
    { worldChampion: false, name: "Temperley" },
    { worldChampion: false, name: "Defensa y Justicia" },
    { worldChampion: false, name: "Godoy Cruz de Mendoza" },
    { worldChampion: false, name: "Patronato" },
    { worldChampion: false, name: "Atlético Tucumán" },
    { worldChampion: false, name: "San Martín de Tucumán" },
    { worldChampion: false, name: "Atlanta" },
    { worldChampion: false, name: "Platense" },
    { worldChampion: false, name: "Tigre" },
    { worldChampion: false, name: "Almagro" },
    { worldChampion: false, name: "Rafaela" },
    { worldChampion: false, name: "Sarmiento" },
    { worldChampion: false, name: "All Boys" },
    { worldChampion: false, name: "San Martín de San Juan" },
    { worldChampion: false, name: "Nueva Chicago" },
    { worldChampion: false, name: "Sacachispas" },
    { worldChampion: false, name: "Los Andes" },
    { worldChampion: false, name: "Berazategui" },
    { worldChampion: false, name: "Dock Sud" },
    { worldChampion: false, name: "Yupanqui" },
    { worldChampion: false, name: "Aldosivi" },
    { worldChampion: false, name: "Central Córdoba de Santiago del Estero" }
];
