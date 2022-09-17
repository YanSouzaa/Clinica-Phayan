
function Schedule(props) {
    return (
      <tr>
        <td>{props.id}</td>
        <td>{props.paciente}</td>
        <td>{props.medico}</td>
        <td>{props.data}</td>
        <td>{props.horario}</td>
      </tr>
  
  
    );
  }
  
  export default Schedule;
  