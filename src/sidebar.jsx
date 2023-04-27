import { BsDiscord , GoBeaker, AiFillFolder, DiReact, GrNode, IoLogoJavascript } from 'react-icons/all';
import { FaBeer } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaBeer size="20"/>} />
            <SideBarIcon icon={<BsDiscord/>} />
            <SideBarIcon icon={<GoBeaker/>} />
            <SideBarIcon icon={<AiFillFolder/>} />
            <SideBarIcon icon={<DiReact/>} />
            <SideBarIcon icon={<GrNode/>} />
            <SideBarIcon icon={<IoLogoJavascript/>} />
            <i>aaaaa</i>
        </div>
    );
};

const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);

export default SideBar;