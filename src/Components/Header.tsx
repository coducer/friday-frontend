import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <div className=" p-3 app-header d-flex justify-content-between align-items-center border-bottom">
      <h6 className=" fw-semibold m-0">Friday.Ai</h6>
      <span>
        <CgProfile size={24} color="var(--textLight)" />
      </span>
    </div>
  );
}

export default Header;
