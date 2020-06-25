/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Grouped(props) {


    const { handlerRegistrationTeam } = props;

    const orderedArray = (teams) => {
        //console.log(`*******   orderedArray  before  teams:  ${ JSON.stringify(teams) }`);
        const result = teams.sort((a, b) => a.name.localeCompare(b.name));
        //console.log(`*******   orderedArray  after   result:  ${ JSON.stringify(result) }`);
        return result;
    }

  const options = orderedArray(teams).map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: option.worldChampion ? 'Campeones del Mundo' : 'Otros equipos', //firstLetter,
      ...option,
    };
  });



  const handleTeamChange = (value) => {

    console.log(`**** handleTeamChange  value :  ${ JSON.stringify(value) }`);

    if(value){

        handlerRegistrationTeam(value.name);
    }
  }


  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      style={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="Selecciona el equipo del que sos hincha" variant="outlined"  />}
      freeSolo
      onChange={(event, value) => handleTeamChange(value)}
    />
  );
}


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
    { worldChampion: false, name: "Huracán" },
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

const worldChampionTeams = [
    "Estudiantes de la Plata",
    "Racing",
    "Independiente",
    "Boca",
    "River",
    "Velez",
];