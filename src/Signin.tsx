import React from 'react';
import Container from './components/Container';
import easeLogo from './assets/images/easeLogo.svg'

function Signin() {
  return (
    <div className="signin bg-ease-grey">
      <Container>
      <div className="auth bg-aqua bg-white rounded-[20px] ">
            <div className="auth__content h-full py-[40px] px-[40px]">
                <div className="auth__content-header text-center">
                    <div className="auth__content-header-logo flex justify-center">
                        <img src={easeLogo} alt="ease-logo"/>
                    </div>
                    <div className="auth__content-header-title mt-[20px] text-[20px] font-l">
                        Wallet Authentication
                    </div>
                    <div className="auth__content-header-info mt-[10px]">
                        Enter your account information for authentication.
                    </div>
                    <div className="auth__content-header-link-telegram mt-[20px]">
                        <a href="/" className="telegram-logo py-[12px] flex justify-center items-center bg-[#459DDA] text-white rounded-[9px]">
                            {/* <span className="mr-[10px]"><img src={telegram} alt="telegram"></span> */}
                            Telegram
                        </a>
                    </div>
                    <div className="auth__content-header-divider flex items-center my-[10px]">
                        <hr className="border-[#E2E3E6] w-full" />
                        <span className='px-4'>or</span>
                        <hr className="border-[#E2E3E6] w-full" />
                    </div>
                </div>
                <div className="auth__content-form">
                    <form className="flex flex-col" action="POST">
                        <div className="auth__content-form-email">
                            <label htmlFor="email" className="block mb-[5px]">E-mail Address</label>
                            <input type="text" name="email" id="input-email" className="w-full border border-[#E2E3E6] py-[10px] px-4 rounded-[9px] outline-none focus:border-[#181616] transition-colors ease-in duration-300" />
                        </div>
                        <div className="auth__content-form-password mt-[10px]">
                            <label htmlFor="email" className="block mb-[5px]">Password</label>
                            <input type="password" name="password" id="input-password" className="w-full border border-[#E2E3E6] py-[10px] px-4 rounded-[9px] outline-none focus:border-[#181616] transition-colors ease-in duration-300" />
                        </div>
                        <a href="/" className="mt-5 text-center">Forgot password?</a>
                        <button className="py-[12px] bg-[#0E1218] text-white rounded-[9px] mt-5">Authorize</button>
                    </form>
                    <div className="auth__content-form-register mt-[15px]">
                        New to Ease Wallet? <a href="/" className="font-xl">Create your account now</a>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default Signin;
