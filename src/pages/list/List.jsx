import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navabr/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./List.scss"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar />
        <Datatable/>
      </div>
    </div>
  )
}

export default List
