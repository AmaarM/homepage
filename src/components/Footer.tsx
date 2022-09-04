const Footer = () => {
  return (
    <div className="fixed left-0 bottom-0 flex justify-around w-screen my-2">
      <div className="flex flex-col justify-between">
        <p className="text-skin-neon">
          © {new Date().getFullYear()} Amaar Mohamed. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
