import { useEffect} from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContains, filterEquals, filterLess, filterMore, loadTable, selectCurrentPage, selectFilterTable, selectPerPage, selectTotalCounte, setCurrentPage,} from './ListSlice';

function App() {
  const dispatch = useDispatch()
  const table = useSelector(selectFilterTable);
  const currentPage = useSelector(selectCurrentPage);
  const totalCounte = useSelector(selectTotalCounte);
  const perPage = useSelector(selectPerPage)

  const pages = []

  for (let i = 1; i <= Math.ceil((totalCounte/perPage)); i++){
    pages.push(i); 
  }
  
  const lastTableIndex = currentPage * perPage
  const firstTableIndex = lastTableIndex - perPage
  const currentTable = table.slice(firstTableIndex,lastTableIndex ) 
  

  useEffect(() => {
    dispatch(loadTable());
}, [dispatch]);

  const newFilter = (e) => {
    e.preventDefault()

    let name = e.target.column.value
    let meaning =e.target.meaning.value
    let data = {name, meaning }
    console.log(data);

    if (e.target.condition.value === "Равно" ) {
      dispatch(filterEquals(data))
    }  
    if (e.target.condition.value === "Больше" ) {
      dispatch(filterMore(data))
      } 
    if (e.target.condition.value === "Меньше" ) {
      dispatch(filterLess(data))
        } 
    if (e.target.condition.value === "Cодержит" ) {
    dispatch(filterContains(data))
          } 

    e.target.reset();
  };


  return (
    <>
    <div className="App">
    <form onSubmit={newFilter}>     
      <br/>
      <select className='custom-select' name="column" id="column">
      <option value="">Choose an option</option>
      <option value="title">Название</option>
      <option value="quantity">Количество</option>
      <option value="distance">Расстояние</option>
      </select>
      <select className='custom-select' name="condition" id="condition">
      <option value="">Choose an option</option>
      <option value="Равно">Равно</option>
      <option value="Cодержит">Cодержит</option>
      <option value="Больше">Больше</option>
      <option value="Меньше">Меньше</option> 
      </select>
      <input className='custom-input'  placeholder='Значение' name ='meaning' type="text"></input>
      <button className='btn'  type="submit"> Найти</button>
      <button className='btn' onClick={()=>dispatch(loadTable())}> Очистить</button>
    </form>
    <br></br>

    <table border="1" className="table">
      <caption className='headerTable'>Таблица маршрутов </caption>
      <thead>
      <tr>
        <th>Дата</th>
        <th>Название</th>
        <th>Количество</th>
        <th>Расстояние, км</th>
      </tr>
      </thead>
      <tbody>
      {currentTable?.map((el)=>(
        <tr key={el.id}><td>{el?.date}</td><td>{el?.title}</td><td> {el?.quantity}</td><td>{el?.distance}</td></tr>
        ))}
        </tbody>
  </table>
      
  </div>
  <div className='pages'>
    {pages.map((el, index) =>

    <span key={index} className={currentPage === el ? "current-page" : "page"}
    onClick={() => dispatch(setCurrentPage(el))}
    >{el}</span>)}

  </div>
  </>
  );
}

export default App;
