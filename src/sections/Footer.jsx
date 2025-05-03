import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center sm:items-start items-center">
          <a className="logo flex flex-row items-center" href="#hero">
            <img
              src="/images/logos/Logo.png"
              alt="logo"
              height={30}
              width={30}
            />
            | Yacine
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((social, index) => (
            <a key={index} href={social.url} target="_blank">
              <img src={social.imgPath} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-white-50 text-sm">
            ©{new Date().getFullYear()}{" "}
            <span className="font-bold">Yacine Bensid-Ahmed</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
