
const SelectFilter = () => {
  return (
    <div className="inputs">
        <label htmlFor="selectFiltro">Filtrar</label>
      <select name="selectFiltro" id="selectFiltro">
        <option value="todas">Todas</option><option value="completas">Completas</option><option value="incompletas">Incompletas</option>
      </select>
    </div>
  )
}

export default SelectFilter
