import { redirect } from "react-router-dom";
type Props = {};

const Header = (props: Props) => {

    function handleClick(link: string) {
        console.log(link)
        redirect(link)
    }
  return (
    <>
      <div id="header" className="central-content">
        <div>
          <a className="home" onClick={() => handleClick("/")}>derrick yew</a>
        </div>
        <div className="flex gap-10">
          <a className="link" onClick={() => handleClick("/about")}>about</a>
          <a className="link" onClick={() => handleClick("/experience")}>experience</a>
          <a className="link" onClick={() => handleClick("/contact")}>contact</a>
        </div>
      </div>
    </>
  );
};

export default Header;
