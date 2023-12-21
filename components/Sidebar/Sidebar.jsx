import Menu from './Menu'
import Profile from './Profile'

const Sidebar = () => {
    return (
        <div className='w-60 border border-gray-700 rounded-xl flex flex-col justify-between'>
            <Profile />
            <Menu />
            <Logout />
        </div>
    )
}



const Logout = () => {
    return <button></button>
}
export default Sidebar