import Schedule from "../components/Schedule";

function SchedulesScreen() {
  return (
    <div>
      <h1>Agendamentos</h1>
      <div>
        <table>
          <Schedule id='1' paciente='Yan' medico='Dr Ramon' data='19/09/2022' horario='18:00' />
          <Schedule id='2' paciente='Cuca' medico='Dr Dionéses' data='20/09/2022' horario='16:00' />
          <Schedule id='3' paciente='Simas' medico='Dra Natasha' data='22/09/2022' horario='13:00' />
        </table>
      </div>

    </div>


  );
}

export default SchedulesScreen;
